# A margin from numbers you already have

**Trust label:** `educational-reference`  
**Catalog:** [wax-ecosystem-blueprint-catalog](https://github.com/pixel-journey/wax-ecosystem-blueprint-catalog)

`netMargin(10, 4)` is `6`. A positive margin at participation `0.5` scores `85`. Not a blend, and not a forecast.

The course is [EDUCATION.md](EDUCATION.md).

## What is true (executed)

| Rule | Result |
| --- | --- |
| `netMargin(10, 4)` | `6` |
| Cost `10`, margin `0` / `10` / `-10` | pressure `0.5` / `1` / `0` |
| Cost `0` or negative, margin positive | pressure `1` |
| Score at margin `1`, rate `0.5` | `85` |
| Winning metrics | one `netValue` insight. The `overall` line does not run |

`outputValue` is an argument. Nothing here reads AtomicAssets, a template, or a sale.

## AtomicAssets v2

Do not treat a high score as permission to fill `tokens_to_back`. v2 rejects that vector. A blend's value is the output NFT, or a separate treasury transfer. See [px-blend-simple-nft-to-nft](https://github.com/pixel-journey/px-blend-simple-nft-to-nft).

## What is actually in the repo

| Piece | Role |
| --- | --- |
| `examples/engines.ts` | The pure functions. Unchanged by this pass except that tests now lock them |
| `examples/engines.test.ts` | The table above |
| `examples/*.tsx` | Not executed |
| `ARCHITECTURE.md` | Describes a UI this test run did not start |

```bash
npm test
```

MIT — Pixel Journey
