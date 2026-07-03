'use client';

import React from 'react';

interface ExportPanelProps {
  onExport: (format: 'json' | 'csv') => void;
  className?: string;
}

/**
 * Simple export panel for simulation results.
 */
export function ExportPanel({ onExport, className = '' }: ExportPanelProps) {
  return (
    <div className={`rounded-2xl border border-white/10 p-6 ${className}`}>
      <h3 className="font-semibold mb-4">Export Results</h3>
      <p className="text-sm text-muted-foreground mb-4">
        Download your simulation data for planning or sharing.
      </p>

      <div className="flex gap-3">
        <button
          onClick={() => onExport('json')}
          className="flex-1 px-4 py-2 border border-white/20 rounded-xl hover:bg-white/5 text-sm"
        >
          Export as JSON
        </button>
        <button
          onClick={() => onExport('csv')}
          className="flex-1 px-4 py-2 border border-white/20 rounded-xl hover:bg-white/5 text-sm"
        >
          Export as CSV
        </button>
      </div>
    </div>
  );
}
