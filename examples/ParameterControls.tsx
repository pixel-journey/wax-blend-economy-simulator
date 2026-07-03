'use client';

import React from 'react';

interface ParameterControlsProps {
  parameters: Record<string, number>;
  onChange: (key: string, value: number) => void;
  className?: string;
}

/**
 * Reusable parameter controls for blend economy simulation.
 */
export function ParameterControls({ parameters, onChange, className = '' }: ParameterControlsProps) {
  return (
    <div className={`space-y-4 ${className}`}>
      {Object.entries(parameters).map(([key, value]) => (
        <div key={key}>
          <label className="text-sm text-muted-foreground capitalize">
            {key.replace(/([A-Z])/g, ' $1')}
          </label>
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={value}
            onChange={(e) => onChange(key, parseFloat(e.target.value))}
            className="w-full mt-1"
          />
          <div className="text-right font-mono text-sm">{value}</div>
        </div>
      ))}
    </div>
  );
}
