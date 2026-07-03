'use client';

import React from 'react';

interface EconomicVisualizerProps {
  totalCost: number;
  expectedValue: number;
  participationRate: number;
  className?: string;
}

/**
 * Visual display of key economic metrics for a blend.
 */
export function EconomicVisualizer({
  totalCost,
  expectedValue,
  participationRate,
  className = '',
}: EconomicVisualizerProps) {
  const netValue = expectedValue - totalCost;

  return (
    <div className={`rounded-2xl border border-white/10 p-6 ${className}`}>
      <h3 className="font-semibold mb-4">Economic Overview</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
        <div>
          <div className="text-sm text-muted-foreground">Total Cost</div>
          <div className="text-2xl font-bold tabular-nums mt-1">{totalCost}</div>
        </div>
        <div>
          <div className="text-sm text-muted-foreground">Expected Value</div>
          <div className="text-2xl font-bold tabular-nums mt-1">{expectedValue}</div>
        </div>
        <div>
          <div className="text-sm text-muted-foreground">Net Value</div>
          <div className={`text-2xl font-bold tabular-nums mt-1 ${netValue >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
            {netValue >= 0 ? '+' : ''}{netValue}
          </div>
        </div>
      </div>

      <div className="mt-6">
        <div className="text-sm text-muted-foreground mb-1">Estimated Participation</div>
        <div className="w-full bg-white/10 rounded-full h-3">
          <div
            className="bg-emerald-500 h-3 rounded-full transition-all"
            style={{ width: `${Math.min(participationRate * 100, 100)}%` }}
          />
        </div>
        <div className="text-right text-sm mt-1">{(participationRate * 100).toFixed(0)}%</div>
      </div>
    </div>
  );
}
