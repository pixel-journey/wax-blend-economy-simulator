/**
 * Pure economic engines for blend modeling.
 * Deterministic, side-effect free, safe to unit-test.
 */

import type { EconomicParameters, EconomicMetrics, Insight } from "./types";

export function netMargin(expectedValue: number, inputCost: number): number {
  return expectedValue - inputCost;
}

/**
 * Simple participation-pressure heuristic.
 * Higher margin relative to cost → higher assumed attractiveness (clamped 0–1).
 * This is a teaching aid, not a demand forecast.
 */
export function participationPressure(
  margin: number,
  inputCost: number
): number {
  if (inputCost <= 0) return margin > 0 ? 1 : 0;
  const ratio = margin / inputCost;
  // Map rough ratio into 0–1 with soft saturation
  return Math.max(0, Math.min(1, 0.5 + ratio * 0.5));
}

/**
 * Lightweight sustainability score (0–100) for discussion.
 * Rewards positive margin and moderate-to-healthy participation assumptions.
 */
export function sustainabilityScore(
  margin: number,
  participationRate: number
): number {
  let score = 50;
  if (margin > 0) score += 20;
  else if (margin < 0) score -= 25;
  if (participationRate >= 0.4 && participationRate <= 0.85) score += 15;
  else if (participationRate < 0.25) score -= 15;
  else if (participationRate > 0.95) score -= 5; // possibly too hot / unstable
  return Math.max(0, Math.min(100, score));
}

export function computeMetrics(params: EconomicParameters): EconomicMetrics {
  const totalCost = params.inputCost;
  const expectedValue = params.outputValue;
  const netValue = netMargin(expectedValue, totalCost);
  return {
    totalCost,
    expectedValue,
    netValue,
    participation: params.participationRate,
    sustainabilityScore: sustainabilityScore(netValue, params.participationRate),
  };
}

/** Generate a small set of actionable insights from metrics */
export function generateInsights(metrics: EconomicMetrics): Insight[] {
  const insights: Insight[] = [];

  if (metrics.netValue < 0) {
    insights.push({
      tone: "negative",
      trigger: "netValue",
      message:
        "Expected value is below cost. Players may avoid this recipe unless non-EV motivations are strong. Consider lowering costs or improving outcomes.",
    });
  } else if (metrics.netValue === 0) {
    insights.push({
      tone: "warning",
      trigger: "netValue",
      message:
        "Net value is roughly zero. Participation may depend heavily on perception, scarcity, or utility beyond pure EV.",
    });
  } else {
    insights.push({
      tone: "positive",
      trigger: "netValue",
      message:
        "Net expected value is positive under these assumptions. Still compare a conservative scenario before launch.",
    });
  }

  if (metrics.participation < 0.3) {
    insights.push({
      tone: "warning",
      trigger: "participation",
      message:
        "Assumed participation is low. Review visibility, onboarding, and whether the recipe solves a real player goal.",
    });
  }

  if (metrics.sustainabilityScore < 50) {
    insights.push({
      tone: "warning",
      trigger: "sustainabilityScore",
      message:
        "Sustainability heuristic is weak. Revisit sinks, long-term supply, and whether repeated blending harms the wider economy.",
    });
  }

  if (insights.length === 0) {
    insights.push({
      tone: "positive",
      trigger: "overall",
      message:
        "Under the current assumptions the model looks balanced. Validate with a second scenario and real post-launch data.",
    });
  }

  return insights;
}
