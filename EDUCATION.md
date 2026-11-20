# Education — a margin, not a blend market

> **Rung:** `npm test` runs `examples/engines.test.ts`. The React files are not executed.  
> **The test is the rule.**

`outputValue` is a number the caller already computed. This file does not roll a pack, read a template, or price an NFT.

Craft siblings: [simple NFT blend](https://github.com/pixel-journey/px-blend-simple-nft-to-nft) · [hybrid FT+NFT](https://github.com/pixel-journey/px-blend-hybrid-ft-plus-nft) · [wildcard recipes](https://github.com/pixel-journey/px-blend-schema-wildcard-recipes).

Official: [docs.wax.io AtomicAssets](https://docs.wax.io/build/tutorials/howto_atomicassets).

## Learning outcomes

| Level | After this file |
| --- | --- |
| Beginner | Subtract cost from a supplied value |
| Intermediate | See the pressure switch when cost is not positive |
| Masterclass | Say why the score is not a forecast |

---

## Beginner — one scene

```ts
netMargin(10, 4) // 6
computeMetrics({ inputCost: 4, outputValue: 10, participationRate: 0.5 })
// netValue 6, sustainabilityScore 85, one positive insight
```

`sustainabilityScore(1, 0.5)` is `85`: start at 50, +20 for a positive margin, +15 because 0.5 sits in `[0.4, 0.85]`. A zero margin skips the +20 and still gets the band: `65`. A margin of `-1` at participation `0.1` is `10`.

```bash
npm test
```

---

## Intermediate — pressure is not demand

`participationPressure` is `clamp(0.5 + (margin / cost) * 0.5, 0, 1)` when cost is positive.

| Inputs | Result |
| --- | --- |
| margin 0, cost 10 | 0.5 |
| margin 10, cost 10 | 1 |
| margin −10 or −20, cost 10 | 0 |
| cost 0 or negative, margin > 0 | 1 |
| cost 0, margin 0 | 0 |

A negative cost is not "free". It takes the same branch as zero cost. Do not feed it a signed token amount and call the result participation.

`generateInsights` always pushes a net-value row first. Participation under `0.3` adds a warning. A score under `50` adds another. The `overall` branch runs only when that list is empty. The three net cases in the test never leave it empty, so `overall` does not appear.

### Attack → test

| Attack | Lab behavior |
| --- | --- |
| Treat negative cost as a real ratio | returns 1 if margin positive |
| Read score as survival probability | integer heuristic (max 85 here) |
| Wait for balanced `overall` on a win | win already has netValue; overall skipped |
| Call this a live blend market | arguments only |

---

## Masterclass — AtomicAssets is not in this function

A blend that spends NFTs is `px-blend-simple-nft-to-nft` or `px-blend-hybrid-ft-plus-nft`. Both return **unsent** actions. Hybrid mint sets `tokens_to_back` to `[]` because AtomicAssets v2 rejects a non-empty vector.

This score does not tell you whether that mint should exist.

### Common mistakes

1. Treating 85 as "85% chance the economy survives."  
2. Pricing NFTs inside this pure margin function.  
3. Confusing this with craft action builders.

### Exercises

1. `netMargin(10, 4)`? (**6**.)  
2. Max sustainability in the tested band path? (**85**.)  
3. Does this roll a pack? (**No**.)

---

## What this course will not teach

- A price, a drop table, or a participation forecast
- That `examples/*.tsx` matches `engines.ts`
- Native NFT backing
