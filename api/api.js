import axios from "axios";

const coinMarketCapUrl =
  "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest";
const coinMarketCapApiKey = "3f640653-8b8f-4bf3-acad-5d5b20c6e1dc";

const getCriptoDados = async () => {
  try {
    const responseMarketCap = await axios.get(coinMarketCapUrl, {
      headers: {
        "X-CMC_PRO_API_KEY": coinMarketCapApiKey,
        Accept: "application/json",
      },
    });

    const criptoData = responseMarketCap.data.data.map((cripto) => ({
      id: cripto.id,
      name: cripto.name,
      symbol: cripto.symbol,
      price: cripto.quote.USD.price.toFixed(2),
      change: cripto.quote.USD.percent_change_24h.toFixed(2),
      slug: cripto.slug,
    }));

    return criptoData;
  } catch (error) {
    console.error("Erro ao buscar dados das Criptos:", error);
    return [];
  }
};

const getHistoricoDados = async (criptoId) => {
  try {
    const responseHistorico = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${criptoId}/market_chart`,
      {
        params: {
          vs_currency: "usd",
          days: "30",
        },
      }
    );

    const historicoDados = responseHistorico.data.prices.map((preco) => ({
      timestamp: preco[0],
      price: preco[1],
    }));

    return historicoDados;
  } catch (error) {
    console.error("Erro ao buscar dados históricos:", error);
    return [];
  }
};

export { getCriptoDados, getHistoricoDados };
