import { QUESTIONS } from "./questions";

export type ScoringResult = {
  primaryArchetype: string;    // "str", "stb", "cor", "opt", "bld"
  secondaryArchetype: string;
  primaryZScore: number;
  secondaryZScore: number;
  archetypeZScores: Record<string, number>;
  dimensionScores: Record<string, number>;
  overuseLevel: "moderate" | "elevated" | "high";
};

export function calculateResults(answers: Record<number, number>): ScoringResult {
  const dimRaw: Record<string, number> = {};
  const dimCounts: Record<string, number> = {};
  const archScores: Record<string, number> = { str: 0, stb: 0, cor: 0, opt: 0, bld: 0 };

  const dims = ["visibility", "political", "communication", "decisions", "network", "execution"];
  dims.forEach(d => { dimRaw[d] = 0; dimCounts[d] = 0; });

  QUESTIONS.forEach((q, i) => {
    const raw = answers[i] || 3;
    const val = q.reverse ? (6 - raw) : raw;

    dimRaw[q.dimension] += val;
    dimCounts[q.dimension]++;

    (Object.entries(q.weights) as [string, number][]).forEach(([arch, weight]) => {
      archScores[arch] += val * (weight / 5);
    });
  });

  // Dimension averages (1-5 scale)
  const dimensionScores: Record<string, number> = {};
  dims.forEach(d => {
    dimensionScores[d] = dimRaw[d] / dimCounts[d];
  });

  // Standardize archetype scores (z-scores)
  const archValues = Object.values(archScores);
  const mean = archValues.reduce((a, b) => a + b, 0) / archValues.length;
  const stdDev = Math.sqrt(archValues.reduce((sum, v) => sum + Math.pow(v - mean, 2), 0) / archValues.length) || 1;

  const archetypeZScores: Record<string, number> = {};
  Object.entries(archScores).forEach(([arch, score]) => {
    archetypeZScores[arch] = (score - mean) / stdDev;
  });

  const sorted = Object.entries(archetypeZScores).sort((a, b) => b[1] - a[1]);
  const primaryArchetype = sorted[0][0];
  const secondaryArchetype = sorted[1][0];
  const primaryZScore = sorted[0][1];
  const secondaryZScore = sorted[1][1];

  let overuseLevel: "moderate" | "elevated" | "high" = "moderate";
  if (primaryZScore > 1.5) overuseLevel = "high";
  else if (primaryZScore > 0.8) overuseLevel = "elevated";

  return {
    primaryArchetype,
    secondaryArchetype,
    primaryZScore,
    secondaryZScore,
    archetypeZScores,
    dimensionScores,
    overuseLevel,
  };
}
