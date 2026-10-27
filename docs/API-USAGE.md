# API usage for blend economics

`netMargin`, `participationPressure`, and `sustainabilityScore` are local. `participationPressure` is a teaching clamp, not a demand forecast. The functions never see a price oracle.

## Where the two inputs can come from

Input cost is the sum of ingredient prices you choose to use. A spot price, if you show one, is Alcor, not this contract:

```http
GET https://wax.alcor.exchange/api/v2/tickers/TICKER_ID
```

`TICKER_ID` is lowercase. Docs: [Alcor market data](https://docs.alcor.exchange/api/market-data). HTTP 429 means wait.

Expected value of a roll is your weighting of `rolls` on the blend row. The row read is the same as in `wax-blends-creator-and-visualizer`:

```http
POST https://wax.greymass.com/v1/chain/get_table_rows
{"json":true,"code":"blend.nefty","scope":"blend.nefty","table":"blends","limit":1}
```

Do not call Alcor once per roll outcome. Fetch the ticker when the screen opens, then run `computeMetrics` on the numbers you stored.
## Shared rules

This file does not send the requests, and it does not change the engines. A custom origin is an `https` URL with no path, query, or password. Walk at most five origins and stop at the first success. Trust a chain host only after `get_info.chain_id` is `1064487b3cd1a897ce03ae5b6a865651747e2e152090f99c1d19d44e01aea5a4`.

History, if you add it, is not the chain host. On 2026-10-26 `https://wax.eosrio.io/v2/history/get_actions` returned 404 while three other hosts returned 200: `https://wax.eosphere.io`, `https://wax.eosusa.io`, `https://api.waxsweden.org`. Re-check before you pin them. If `more` is true on a table read, continue with `lower_bound` set to `next_key` and keep `limit`.

Docs: [Chain API](https://docs.wax.io/apis/chain-api.htm), [Hyperion v2](https://hyperion.docs.eosrio.io/api/v2/).
