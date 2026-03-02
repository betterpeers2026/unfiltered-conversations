import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { calculateResults } from "@/lib/assessment/scoring";
import { ARCHETYPE_KEY_TO_SLUG } from "@/lib/assessment/archetypes";
import { QUESTIONS } from "@/lib/assessment/questions";

export async function POST(request: Request) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "Authentication required" },
        { status: 401 }
      );
    }

    const { answers } = await request.json();

    // Validate answers: should be Record<number, number> with 50 entries
    if (!answers || typeof answers !== "object") {
      return NextResponse.json(
        { error: "Invalid answers format" },
        { status: 400 }
      );
    }

    const answerCount = Object.keys(answers).length;
    if (answerCount !== QUESTIONS.length) {
      return NextResponse.json(
        { error: `Expected ${QUESTIONS.length} answers, received ${answerCount}` },
        { status: 400 }
      );
    }

    // Validate each answer is 1-5
    for (const [key, value] of Object.entries(answers)) {
      const idx = parseInt(key);
      const val = value as number;
      if (isNaN(idx) || idx < 0 || idx >= QUESTIONS.length || val < 1 || val > 5) {
        return NextResponse.json(
          { error: "Invalid answer value" },
          { status: 400 }
        );
      }
    }

    // Score the assessment server-side
    const result = calculateResults(answers as Record<number, number>);

    // Look up archetype records by slug
    const primarySlug = ARCHETYPE_KEY_TO_SLUG[result.primaryArchetype];
    const secondarySlug = ARCHETYPE_KEY_TO_SLUG[result.secondaryArchetype];

    const [primaryArchetype, secondaryArchetype] = await Promise.all([
      prisma.archetype.findUnique({ where: { slug: primarySlug } }),
      prisma.archetype.findUnique({ where: { slug: secondarySlug } }),
    ]);

    if (!primaryArchetype) {
      return NextResponse.json(
        { error: "Archetype not found" },
        { status: 500 }
      );
    }

    // Save response and update user in a transaction
    const [assessmentResponse] = await prisma.$transaction([
      prisma.assessmentResponse.create({
        data: {
          userId: session.user.id,
          answers: JSON.parse(JSON.stringify(answers)),
          scores: JSON.parse(JSON.stringify(result.archetypeZScores)),
          dimensionScores: JSON.parse(JSON.stringify(result.dimensionScores)),
          archetypeZScores: JSON.parse(JSON.stringify(result.archetypeZScores)),
          resultArchetypeId: primaryArchetype.id,
          secondaryArchetypeId: secondaryArchetype?.id || null,
          overuseLevel: result.overuseLevel,
          version: 1,
        },
      }),
      prisma.user.update({
        where: { id: session.user.id },
        data: {
          archetypeId: primaryArchetype.id,
          assessmentCompletedAt: new Date(),
        },
      }),
    ]);

    return NextResponse.json({ id: assessmentResponse.id });
  } catch (error) {
    console.error("Submit assessment error:", error);
    return NextResponse.json(
      { error: "Failed to submit assessment" },
      { status: 500 }
    );
  }
}
