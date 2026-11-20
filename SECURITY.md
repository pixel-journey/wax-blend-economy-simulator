# Security — blend margin heuristic

## Closed in product rules

| Issue | Behavior |
| --- | --- |
| Non-positive cost | pressure branch does not divide by cost |
| Score | integer heuristic, not a probability |

## Not closed (production)

| Concern | Guidance |
| --- | --- |
| Market data | `outputValue` is caller-supplied |
| Live blends | See `px-blend-*` for unsent craft actions |
| Investment claims | Forbidden from this score |

## Attack angles

1. Marketing "85% sustainability" from the heuristic.  
2. Feeding signed token dust as negative cost and calling it demand.  
3. Confusing this with AtomicAssets craft success.

## Honesty limits

No network. No mint. [docs.wax.io](https://docs.wax.io/) · [simple blend](https://github.com/pixel-journey/px-blend-simple-nft-to-nft).
