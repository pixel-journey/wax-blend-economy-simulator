'use client';

import React from 'react';

interface InsightsPanelProps {
  netValue: number;
  participation: number;
  sustainabilityScore: number;
  className?: string;
}

/**
 * Panel showing actionable economic insights and recommendations.
 */
export function InsightsPanel({
  netValue,
  participation,
  sustainabilityScore,
  className = '',
}: InsightsPanelProps) {
  const getRecommendation = () => {
    if (netValue < 0) return 'Consider reducing costs or increasing rewards to improve value.';
    if (participation < 0.3) return 'Low participation — review reward structure and visibility.';
    if (sustainabilityScore < 60) return 'Sustainability is moderate. Monitor long-term effects.';
    return 'Looks healthy. Continue monitoring after launch.';
  };

  return (
    <div className={`rounded-2xl border border-white/10 p-6 ${className}`}>
      <h3 className="font-semibold mb-4">Insights & Recommendations</h3>

      <div className="space-y-3 text-sm">
        <div>
          <span className="text-muted-foreground">Net Value:</span> {netValue >= 0 ? 'Positive' : 'Negative'}
        </div>
        <div>
          <span className="text-muted-foreground">Participation:</span> {(participation * 100).toFixed(0)}%
        </div>
        <div>
          <span className="text-muted-foreground">Sustainability:</span> {sustainabilityScore}/100
        </div>
      </div>

      <div className="mt-4 p-4 bg-white/5 rounded-xl text-sm">
        <strong>Recommendation:</strong> {getRecommendation()}
      </div>
    </div>
  );
}
