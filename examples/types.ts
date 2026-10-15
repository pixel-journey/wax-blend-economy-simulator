/**
 * Shared types for the Blend Economy Simulator.
 */

/** Adjustable inputs to the pure economic engines */
export interface EconomicParameters {
  /** Total cost of inputs (same unit as output values) */
  inputCost: number;
  /** Probability-weighted expected output value */
  outputValue: number;
  /** Assumed participation rate 0–1 (scenario assumption) */
  participationRate: number;
}

/** Computed metrics from pure engines */
export interface EconomicMetrics {
  totalCost: number;
  expectedValue: number;
  netValue: number;
  participation: number;
  /** Simple 0–100 heuristic for discussion, not a prediction */
  sustainabilityScore: number;
}

export interface Scenario {
  name: string;
  parameters: EconomicParameters;
  metrics: EconomicMetrics;
}

export type InsightTone = "positive" | "warning" | "negative";

export interface Insight {
  tone: InsightTone;
  /** Short actionable message */
  message: string;
  /** Which metric triggered this insight */
  trigger: string;
}
