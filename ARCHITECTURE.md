# ARCHITECTURE.md — Blend Economy Simulator

Authoritative technical reference for modeling Atomic Blend economics on WAX.

---

## 1. Design Intent

This toolkit helps creators pressure-test blend recipes *before* launch. It prioritizes:

1. **Explicit assumptions** — every output traces back to visible inputs
2. **Pure calculation** — economic math is deterministic and testable
3. **Actionable insight** — recommendations beat raw number dumps
4. **Scenario thinking** — one happy path is never enough
5. **Honesty** — simulation is a decision aid, not a prediction of the future

---

## 2. Modeling Invariants

| # | Invariant | Rationale |
|---|-----------|-----------|
| 1 | All economic math lives in pure functions | Testable, shareable, free of UI side effects |
| 2 | Assumptions are parameters, not magic numbers | Stakeholders can challenge and adjust them |
| 3 | At least two scenarios should be comparable | Optimistic-only models hide risk |
| 4 | Insights cite the metric that triggered them | Trust requires traceability |
| 5 | Simulation output is never presented as guaranteed reality | Prevents false confidence |
| 6 | Accessibility applies to controls and key metrics | Decision tools must be usable |

---

## 3. High-Level Architecture

```
ParameterControls  →  Pure Engines  →  EconomicVisualizer
                           ↓
                   ScenarioComparison
                           ↓
                     InsightsPanel
                           ↓
                      ExportPanel
```

Everything above the engines is presentation. Everything inside the engines is pure.

---

## 4. Component Contracts

### ParameterControls
- Expose cost, reward value, probability, and participation assumptions
- Emit structured parameter objects the engines can consume

### engines (pure)
- `expectedValue(outputs)` — probability-weighted value
- `netMargin(ev, cost)` — EV minus cost
- `participationPressure(margin, cost)` — simple heuristic for attractiveness
- Additional helpers as needed; keep them pure

### EconomicVisualizer
- Display EV, cost, margin, and pressure clearly
- Tie every number to the current parameter set

### ScenarioComparison
- Show two (or more) parameter sets side by side
- Highlight deltas that matter for sustainability

### InsightsPanel
- Emit short, actionable recommendations with clear triggers
- Prefer calm language; avoid alarm without a path forward

### ExportPanel
- Produce a shareable text/JSON summary of parameters + results

---

## 5. Data Flow

1. User adjusts parameters.
2. Pure engines recompute EV, margin, and pressure.
3. Visualizer and insights update live.
4. User optionally clones a scenario and compares.
5. User exports a summary for review.

---

## 6. Error & Edge Handling

| Situation | Behavior |
|-----------|----------|
| Zero / negative costs | Clamp or flag; do not silently invent numbers |
| Probabilities not summing near 1 | Surface a note in the UI |
| Extreme participation assumptions | Still compute; let insights warn |
| Missing reward values | Show incomplete state, disable weak insights |

---

## 7. Accessibility

- Labeled controls with keyboard support
- Metrics available as text, not only charts
- Respect `prefers-reduced-motion`

---

## 8. Extensions

- Multi-recipe portfolio simulation
- Time-series participation decay models
- Hooks into real collection supply data
- Deeper coupling with `wax-blends-creator-and-visualizer`

All extensions must preserve the Modeling Invariants.

---

*Pixel Journey — Beautiful interfaces for public blockchain data.*
