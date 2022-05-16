export const CoinList = (currency) =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;

export const SingleCoin = (id) =>
  `https://api.coingecko.com/api/v3/coins/${id}`;

export const PredCoin = () =>
  'https://api.polygon.io/v2/aggs/ticker/X:BTCUSD/range/1/day/2021-07-22/2021-07-22?adjusted=true&sort=asc&limit=120&apiKey=zRaCXeVnNzHyMwv_je_tqxSEfVWgpui1';
  

export const HistoricalChart = (id, days = 365, currency) =>
  `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`;

export const TrendingCoins = (currency) =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`;
