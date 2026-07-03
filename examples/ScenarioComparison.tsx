'use client';

import React from 'react';

interface Scenario {
  name: string;
  totalCost: number;
  expectedValue: number;
  participation: number;
}

interface ScenarioComparisonProps {
  scenarios: Scenario[];
  className?: string;
}

/**
 * Side-by-side comparison of different blend economy scenarios.
 */
export function ScenarioComparison({ scenarios, className = '' }: ScenarioComparisonProps) {
  if (scenarios.length === 0) {
    return <p className="text-sm text-muted-foreground">No scenarios to compare.</p>;
  }

  return (
    <div className={`rounded-2xl border border-white/10 p-6 ${className}`}>
      <h3 className="font-semibold mb-4">Scenario Comparison</h3>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/10 text-left">
              <th className="pb-2">Scenario</th>
              <th className="pb-2 text-right">Cost</th>
              <th className="pb-2 text-right">Expected Value</th>
              <th className="pb-2 text-right">Participation</th>
            </tr>
          </thead>
          <tbody>
            {scenarios.map((scenario, index) => (
              <tr key={index} className="border-b border-white/10 last:border-none">
                <td className="py-2 font-medium">{scenario.name}</td>
                <td className="py-2 text-right font-mono tabular-nums">{scenario.totalCost}</td>
                <td className="py-2 text-right font-mono tabular-nums">{scenario.expectedValue}</td>
                <td className="py-2 text-right font-mono tabular-nums">{(scenario.participation * 100).toFixed(0)}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
