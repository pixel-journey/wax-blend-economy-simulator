import { describe, expect, it } from "vitest";
import {
  computeMetrics,
  generateInsights,
  netMargin,
  participationPressure,
  sustainabilityScore,
} from "./engines";

describe("margin and pressure", () => {
  it("subtracts cost from the caller-supplied value", () => {
    expect(netMargin(10, 4)).toBe(6);
    expect(netMargin(4, 10)).toBe(-6);
  });

  it("saturates pressure and treats a non-positive cost as a switch", () => {
    expect(participationPressure(0, 10)).toBeCloseTo(0.5);
    expect(participationPressure(10, 10)).toBeCloseTo(1);
    expect(participationPressure(-10, 10)).toBeCloseTo(0);
    expect(participationPressure(-20, 10)).toBeCloseTo(0);
    expect(participationPressure(0, 0)).toBe(0);
    expect(participationPressure(1, 0)).toBe(1);
    expect(participationPressure(1, -5)).toBe(1);
  });
});

describe("score and insights", () => {
  it("adds the band bonuses and never leaves the written range", () => {
    expect(sustainabilityScore(1, 0.5)).toBe(85);
    expect(sustainabilityScore(0, 0.5)).toBe(65);
    expect(sustainabilityScore(-1, 0.1)).toBe(10);
    expect(sustainabilityScore(1, 0.99)).toBe(65);
    expect(sustainabilityScore(1, 0.9)).toBe(70);
  });

  it("always writes a net-value insight, so the overall fallback does not run", () => {
    const losing = generateInsights({
      totalCost: 10,
      expectedValue: 9,
      netValue: -1,
      participation: 0.1,
      sustainabilityScore: 10,
    });
    expect(losing.map((row) => row.trigger)).toEqual([
      "netValue",
      "participation",
      "sustainabilityScore",
    ]);
    expect(losing[0].tone).toBe("negative");

    const even = generateInsights({
      totalCost: 5,
      expectedValue: 5,
      netValue: 0,
      participation: 0.5,
      sustainabilityScore: 65,
    });
    expect(even.map((row) => row.trigger)).toEqual(["netValue"]);
    expect(even[0].tone).toBe("warning");

    const winning = generateInsights(
      computeMetrics({ inputCost: 4, outputValue: 10, participationRate: 0.5 }),
    );
    expect(winning.map((row) => row.trigger)).toEqual(["netValue"]);
    expect(winning[0].tone).toBe("positive");
    expect(winning.some((row) => row.trigger === "overall")).toBe(false);
  });
});
