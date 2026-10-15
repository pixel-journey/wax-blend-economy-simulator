"use client";

import { useId, useMemo } from "react";
import { generateInsights } from "./engines";
import type { EconomicMetrics, Insight } from "./types";

export interface InsightsPanelProps {
  metrics: EconomicMetrics;
  className?: string;
}

const toneStyles: Record<Insight["tone"], string> = {
  positive: "border-emerald-500/30 bg-emerald-500/10 text-emerald-100",
  warning: "border-amber-500/30 bg-amber-500/10 text-amber-100",
  negative: "border-red-500/30 bg-red-500/10 text-red-100",
};

/**
 * InsightsPanel
 *
 * Actionable recommendations derived from pure engines, each citing its trigger metric.
 */
export function InsightsPanel({ metrics, className = "" }: InsightsPanelProps) {
  const headingId = useId();
  const insights = useMemo(() => generateInsights(metrics), [metrics]);

  return (
    <section
      className={`rounded-2xl border border-white/10 bg-black/20 p-6 ${className}`}
      aria-labelledby={headingId}
    >
      <h3 id={headingId} className="font-semibold text-lg mb-1">
        Insights & Recommendations
      </h3>
      <p className="text-sm text-white/60 mb-5">
        Decision aids based on the current assumptions — not guarantees.
      </p>

      <ul className="space-y-3">
        {insights.map((insight) => (
          <li
            key={`${insight.trigger}-${insight.message.slice(0, 24)}`}
            className={`rounded-xl border p-3 text-sm leading-relaxed ${toneStyles[insight.tone]}`}
          >
            <p>{insight.message}</p>
            <p className="mt-1 text-xs opacity-70">Trigger: {insight.trigger}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
