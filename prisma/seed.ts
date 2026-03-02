import { PrismaClient } from "../app/generated/prisma/client";
import { PrismaNeonHttp } from "@prisma/adapter-neon";
import { ARCHETYPES } from "../lib/assessment/archetypes";
import { QUESTIONS } from "../lib/assessment/questions";
import { DIMENSIONS, DIMENSION_LEVELS } from "../lib/assessment/dimensions";
import type { DimensionSlug } from "../lib/assessment/dimensions";

const adapter = new PrismaNeonHttp(process.env.DATABASE_URL!, {});
const prisma = new PrismaClient({ adapter });

async function main() {
  // Seed archetypes
  console.log("Seeding archetypes...");
  for (const arch of Object.values(ARCHETYPES)) {
    await prisma.archetype.upsert({
      where: { slug: arch.slug },
      update: {
        title: arch.title,
        symbol: arch.symbol,
        coreQuestion: arch.coreQuestion,
        decisionPrinciple: arch.decisionPrinciple,
        coreStrength: arch.coreStrength,
        areasOfGrowth: arch.areasOfGrowth,
        costStatement: arch.costStatement,
        howOthersSeeYou: arch.howOthersSeeYou,
        overuseRisk: arch.overuseRisk,
        firstMove: arch.firstMove,
        tension: arch.tension,
        power: arch.power,
        pressureResponse: arch.pressureResponse,
        risk: arch.risk,
      },
      create: {
        slug: arch.slug,
        title: arch.title,
        symbol: arch.symbol,
        coreQuestion: arch.coreQuestion,
        decisionPrinciple: arch.decisionPrinciple,
        coreStrength: arch.coreStrength,
        areasOfGrowth: arch.areasOfGrowth,
        costStatement: arch.costStatement,
        howOthersSeeYou: arch.howOthersSeeYou,
        overuseRisk: arch.overuseRisk,
        firstMove: arch.firstMove,
        tension: arch.tension,
        power: arch.power,
        pressureResponse: arch.pressureResponse,
        risk: arch.risk,
      },
    });
  }
  console.log(`Seeded ${Object.keys(ARCHETYPES).length} archetypes.`);

  // Seed assessment questions
  console.log("Seeding assessment questions...");
  for (let i = 0; i < QUESTIONS.length; i++) {
    const q = QUESTIONS[i];
    const order = i + 1;
    await prisma.assessmentQuestion.upsert({
      where: { order },
      update: {
        prompt: q.prompt,
        dimension: q.dimension,
        reverse: q.reverse || false,
        weights: JSON.parse(JSON.stringify(q.weights)),
        version: 1,
        active: true,
      },
      create: {
        order,
        prompt: q.prompt,
        dimension: q.dimension,
        reverse: q.reverse || false,
        weights: JSON.parse(JSON.stringify(q.weights)),
        version: 1,
        active: true,
      },
    });
  }
  console.log(`Seeded ${QUESTIONS.length} assessment questions.`);

  // Seed dimensions
  console.log("Seeding dimensions...");
  const dimSlugs = Object.keys(DIMENSIONS) as DimensionSlug[];
  for (let i = 0; i < dimSlugs.length; i++) {
    const slug = dimSlugs[i];
    const dim = DIMENSIONS[slug];
    const dimension = await prisma.dimension.upsert({
      where: { slug },
      update: {
        name: dim.name,
        description: dim.description,
        order: i + 1,
      },
      create: {
        slug,
        name: dim.name,
        description: dim.description,
        order: i + 1,
      },
    });

    // Seed dimension levels
    const levels = DIMENSION_LEVELS[slug];
    for (let tier = 0; tier < levels.length; tier++) {
      const level = levels[tier];
      await prisma.dimensionLevel.upsert({
        where: {
          dimensionId_tier: {
            dimensionId: dimension.id,
            tier: tier + 1,
          },
        },
        update: {
          maxScore: level.max,
          label: level.label,
          description: level.description,
          color: level.color,
        },
        create: {
          dimensionId: dimension.id,
          tier: tier + 1,
          maxScore: level.max,
          label: level.label,
          description: level.description,
          color: level.color,
        },
      });
    }
  }
  console.log(`Seeded ${dimSlugs.length} dimensions with levels.`);
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });
