/**
 * Shared TypeScript types for the Blend Economy Simulator examples.
 */

export interface EconomicParameters {
  inputCost: number;
  outputValue: number;
  participationRate: number;
  [key: string]: number;
}

export interface EconomicMetrics {
  totalCost: number;
  expectedValue: number;
  netValue: number;
  participation: number;
}

export interface Scenario {
  name: string;
  totalCost: number;
  expectedValue: number;
  participation: number;
}

export interface Insight {
  type: 'positive' | 'warning' | 'negative';
  message: string;
}
