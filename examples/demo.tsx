'use client';

import { useState } from 'react';
import { ParameterControls } from './ParameterControls';
import { EconomicVisualizer } from './EconomicVisualizer';
import { ScenarioComparison } from './ScenarioComparison';
import { InsightsPanel } from './InsightsPanel';

/**
 * Combined demo showing how all the blend economy components work together.
 */
export default function BlendEconomyDemo() {
  const [parameters, setParameters] = useState({
    inputCost: 50,
    outputValue: 80,
    participationRate: 45,
  });

  const totalCost = parameters.inputCost * 10;
  const expectedValue = parameters.outputValue * 8;
  const netValue = expectedValue - totalCost;
  const participation = parameters.participationRate / 100;

  const scenarios = [
    { name: 'Current', totalCost, expectedValue, participation },
    { name: 'Optimized', totalCost: totalCost * 0.85, expectedValue: expectedValue * 1.1, participation: Math.min(participation + 0.15, 0.9) },
    { name: 'Aggressive', totalCost: totalCost * 1.3, expectedValue: expectedValue * 1.4, participation: Math.max(participation - 0.2, 0.2) },
  ];

  const handleParameterChange = (key: string, value: number) => {
    setParameters((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-2">Blend Economy Simulator Demo</h2>
        <p className="text-muted-foreground">
          Adjust parameters to see real-time economic impact and recommendations.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <ParameterControls 
          parameters={parameters} 
          onChange={handleParameterChange} 
        />
        <EconomicVisualizer 
          totalCost={totalCost} 
          expectedValue={expectedValue} 
          participationRate={participation} 
        />
      </div>

      <ScenarioComparison scenarios={scenarios} />

      <InsightsPanel 
        netValue={netValue} 
        participation={participation} 
        sustainabilityScore={Math.floor(60 + (netValue / 10) + (participation * 30))} 
      />

      <div className="text-xs text-muted-foreground">
        This is an educational demo. Real implementations should connect to on-chain data and use more sophisticated modeling.
      </div>
    </div>
  );
}
