"use client";

import { useId } from "react";

export interface EconomicVisualizerProps {
  totalCost: number;
  expectedValue: number;
  participationRate: number;
  sustainabilityScore?: number;
  className?: string;
}

/**
 * EconomicVisualizer
 *
 * Clear display of cost, expected value, net margin, and participation assumption.
 */
export function EconomicVisualizer({
  totalCost,
  expectedValue,
  participationRate,
  sustainabilityScore,
  className = "",
}: EconomicVisualizerProps) {
  const headingId = useId();
  const netValue = expectedValue - totalCost;
  const netPositive = netValue >= 0;

  return (
    <section
      className={`rounded-2xl border border-white/10 bg-black/20 p-6 ${className}`}
      aria-labelledby={headingId}
    >
      <h3 id={headingId} className="font-semibold text-lg mb-1">
        Economic Overview
      </h3>
      <p className="text-sm text-white/60 mb-5">
        Snapshot under the current assumptions. Not a forecast of real-world demand.
      </p>

      <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
        <div>
          <div className="text-sm text-white/50">Total cost</div>
          <div className="mt-1 text-2xl font-bold tabular-nums text-white/90">
            {totalCost.toFixed(2)}
          </div>
        </div>
        <div>
          <div className="text-sm text-white/50">Expected value</div>
          <div className="mt-1 text-2xl font-bold tabular-nums text-white/90">
            {expectedValue.toFixed(2)}
          </div>
        </div>
        <div>
          <div className="text-sm text-white/50">Net value</div>
          <div
            className={`mt-1 text-2xl font-bold tabular-nums ${
              netPositive ? "text-emerald-400" : "text-red-400"
            }`}
            aria-live="polite"
          >
            {netPositive ? "+" : ""}
            {netValue.toFixed(2)}
          </div>
        </div>
      </div>

      <div className="mt-6">
        <div className="mb-1 flex justify-between text-sm text-white/50">
          <span>Assumed participation</span>
          <span className="font-mono text-white/80">
            {(participationRate * 100).toFixed(0)}%
          </span>
        </div>
        <div
          className="h-3 overflow-hidden rounded-full bg-white/10"
          role="progressbar"
          aria-valuenow={Math.round(participationRate * 100)}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Assumed participation rate"
        >
          <div
            className="h-3 rounded-full bg-emerald-500 transition-all"
            style={{ width: `${Math.min(participationRate * 100, 100)}%` }}
          />
        </div>
      </div>

      {typeof sustainabilityScore === "number" && (
        <p className="mt-4 text-sm text-white/60">
          Sustainability heuristic:{" "}
          <span className="font-mono text-white/90">{sustainabilityScore}/100</span>
        </p>
      )}
    </section>
  );
}
