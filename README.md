# wax-blend-economy-simulator

Educational **net-margin and sustainability sketch** for blend economy discussion.

Inputs (`inputCost`, `outputValue`, `participationRate`) are arguments you already computed. This lab does not call a blend contract, read AtomicAssets, price an NFT, or forecast survival probability.

```bash
npm install && npm test
```

| Doc | Role |
| --- | --- |
| [EDUCATION.md](./EDUCATION.md) | Margin math, pressure, attack table |
| [ARCHITECTURE.md](./ARCHITECTURE.md) | UI notes (not executed by tests) |
| [SECURITY.md](./SECURITY.md) | Soft-signal honesty |
| [SOURCES.md](./SOURCES.md) | Related blend labs |

Craft siblings: [simple NFT blend](https://github.com/pixel-journey/px-blend-simple-nft-to-nft) · [hybrid FT+NFT](https://github.com/pixel-journey/px-blend-hybrid-ft-plus-nft) · [wildcard recipes](https://github.com/pixel-journey/px-blend-schema-wildcard-recipes).

AtomicAssets v2 note: do not treat a high score as permission to fill `tokens_to_back` — v2 rejects a non-empty vector on that path.

Official: [docs.wax.io AtomicAssets](https://docs.wax.io/build/tutorials/howto_atomicassets).

MIT — Pixel Journey
