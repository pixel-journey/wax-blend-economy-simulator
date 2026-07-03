# ARCHITECTURE.md — Blend Economy Simulator

This document describes the technical architecture and design decisions for the Blend Economy Simulator.

## Overview

The goal of this blueprint is to provide creators with an interactive, visual way to model the economics of Atomic Blends before launching them. It focuses on costs, expected value, participation dynamics, and long-term sustainability.

## Core Principles

- **Simulation-first**: All economic modeling should run client-side for instant feedback.
- **Transparency**: Visualizations and insights should make economic assumptions clear.
- **Actionable**: The simulator should produce recommendations, not just raw numbers.
- **Scenario-based**: Users should easily compare multiple configurations.
- **Exportable**: Results should be easy to share and document.

## High-Level Architecture

```
User Interface (Next.js + Tailwind + shadcn/ui)
          │
          ▼
Parameter Controls (interactive inputs)
          │
          ▼
Simulation Engine (pure client-side calculations)
          │
          ▼
Visualization Layer (charts + metrics)
          │
          ▼
Insights & Recommendations Engine
          │
          ▼
Scenario Comparison + Export
```

## Key Components

| Component                  | Responsibility                                      | Key Technologies             |
|----------------------------|-----------------------------------------------------|------------------------------|
| `ParameterControls`        | User-adjustable blend parameters                    | React controlled inputs      |
| `EconomicVisualizer`       | Display of cost, value, participation metrics       | React + simple calculations  |
| `ScenarioComparison`       | Side-by-side comparison of different configurations | Table + state management     |
| `InsightsPanel`            | Actionable recommendations based on simulation      | Rule-based logic + UI        |
| `demo.tsx`                 | Full composition example                            | All components together      |

## Data Flow

1. User adjusts parameters via `ParameterControls`
2. Simulation engine recalculates metrics in real time
3. `EconomicVisualizer` and charts update instantly
4. `InsightsPanel` generates recommendations
5. User can compare scenarios or export results

## Simulation vs Real Data

All calculations are client-side for speed and education. In production tools, these models can be connected to real on-chain data or creator analytics after launch.

## Design Decisions

- Pure client-side simulation for instant, free feedback
- Clear separation between simulation logic and UI
- Emphasis on actionable insights over raw data
- Support for scenario comparison as a core feature
- Simple, extensible component structure

## Future Extensions

- Advanced economic modeling (inflation curves, long-term projections)
- Integration with real on-chain data
- Batch simulation and sensitivity analysis
- Export to PDF / Notion / Google Sheets
- Multi-blend portfolio modeling

This architecture prioritizes **speed, clarity, and actionability** so creators can make better-informed decisions about their blend systems.
