# Sources

| Source | Use |
| --- | --- |
| [docs.wax.io](https://docs.wax.io/) | Product context |
| [simple blend](https://github.com/pixel-journey/px-blend-simple-nft-to-nft) | Unsent craft actions |
| [hybrid blend](https://github.com/pixel-journey/px-blend-hybrid-ft-plus-nft) | FT + NFT craft |
| [wildcard recipes](https://github.com/pixel-journey/px-blend-schema-wildcard-recipes) | Slot matching only |

## Product facts locked by tests

- `netMargin(10, 4) === 6`.
- `sustainabilityScore(1, 0.5) === 85` (50 base + 20 positive margin + 15 participation band).
- Zero margin at 0.5 participation → **65**.
- Pressure clamps to [0, 1]; non-positive cost does not use `margin/cost`.
- **Not** a market forecast and **not** a live blend.
