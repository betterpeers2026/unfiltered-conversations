import type { ReportData } from "./generate-report-html";
import { REPORT_CONTENT } from "./archetype-content";
import {
  DIMENSIONS,
  DIMENSION_LEVELS,
  type DimensionSlug,
} from "@/lib/assessment/dimensions";

type AssessmentResponseWithArchetypes = {
  id: string;
  dimensionScores: Record<string, number> | unknown;
  completedAt: Date;
  resultArchetype: { slug: string; title: string };
  secondaryArchetype: { slug: string; title: string } | null;
};

function getDimensionLabel(
  dimension: DimensionSlug,
  score: number
): { label: string; description: string } {
  const levels = DIMENSION_LEVELS[dimension];
  for (const level of levels) {
    if (score <= level.max) {
      return { label: level.label, description: level.description };
    }
  }
  const last = levels[levels.length - 1];
  return { label: last.label, description: last.description };
}

function generateAssessmentId(date: Date, userName: string): string {
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  const yy = String(date.getFullYear()).slice(-2);

  const parts = userName.trim().split(/\s+/);
  let initials = "XX";
  if (parts.length >= 2) {
    initials = (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  } else if (parts.length === 1 && parts[0].length >= 2) {
    initials = parts[0].slice(0, 2).toUpperCase();
  }

  return `UC-${mm}${dd}${yy}-${initials}`;
}

function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function assembleReportData(
  user: { name: string; email: string },
  response: AssessmentResponseWithArchetypes
): ReportData {
  const primarySlug = response.resultArchetype.slug;
  const content = REPORT_CONTENT[primarySlug];

  if (!content) {
    throw new Error(`No report content found for archetype: ${primarySlug}`);
  }

  const dimScores = response.dimensionScores as Record<string, number>;
  const completedDate = new Date(response.completedAt);
  const userName = user.name || user.email.split("@")[0];

  const dimensionSlugs = Object.keys(DIMENSIONS) as DimensionSlug[];
  const dimensions = dimensionSlugs.map((slug) => {
    const score = dimScores[slug] || 0;
    const { label, description } = getDimensionLabel(slug, score);
    return {
      name: DIMENSIONS[slug].name,
      score: Math.round(score * 10) / 10,
      maxScore: 5.0,
      label,
      description,
    };
  });

  return {
    userName,
    date: formatDate(completedDate),
    assessmentId: generateAssessmentId(completedDate, userName),
    primaryTitle: content.primaryTitle,
    primaryTagline: content.primaryTagline,
    secondaryTitle: content.secondaryTitle,
    secondaryTagline: content.secondaryTagline,
    secondaryDesc: content.secondaryDesc,
    currentLevel: content.currentLevel,
    promotionRisk: content.promotionRisk,
    developmentLever: content.developmentLever,
    decisionPrinciple: content.decisionPrinciple,
    summaryParagraph: content.summaryParagraph,
    coreStrength: content.coreStrength,
    areasOfGrowth: content.areasOfGrowth,
    costStatement: content.costStatement,
    howOthersSeeYou: content.howOthersSeeYou,
    overuseRisk: content.overuseRisk,
    tension: content.tension,
    powerStyle: content.powerStyle,
    pressureResponse: content.pressureResponse,
    primaryRisk: content.primaryRisk,
    dimensions,
    tendencies: [...content.tendencies],
    misreadIntro: content.misreadIntro,
    misreadOutro: content.misreadOutro,
    misreadMetrics: content.misreadMetrics.map((m) => ({ ...m })),
    firstMove: content.firstMove,
    roadmap: content.roadmap.map((m) => ({
      monthTitle: m.monthTitle,
      items: [...m.items],
    })),
    grandfatherNote: content.grandfatherNote,
  };
}
