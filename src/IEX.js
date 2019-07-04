const axios = require("axios");

module.exports = class IEX {
  constructor(token, testMode = false) {
    this.token = token;
    this.baseURL = testMode
      ? "https://sandbox.iexapis.com/stable"
      : "https://cloud.iexapis.com/stable";
  }
  getData(branch, symbol, endpoint, params) {
    if (!this.token) {
      console.error("Must provide IEX token in constructor");
      return;
    }
    let query = "";
    if (params) {
      for (let key of Object.keys(params)) {
        if (!key) continue;
        query += `&${key}=${params[key]}`;
      }
    }
    const url = `${this.baseURL}${branch}/${symbol}/${endpoint}?token=${this.token}${query}`;
    // Debug URL
    console.log(url);
    return new Promise((res, rej) => {
      axios
        .get(url)
        .then(response => res(response.data))
        .catch(err => rej(err));
    });
  }
  symbols = () => {
    return new Promise((res, rej) => {
      axios
        .get(`${this.baseURL}/ref-data/iex/symbols?token=${this.token}`)
        .then(response => res(response.data))
        .catch(err => rej(err));
    });
  };
  //NOT AVAILABLE TO START USERS
  search = query => {
    return new Promise((res, rej) => {
      axios
        .get(`${this.baseURL}/search/${query}?token=${this.token}`)
        .then(response => res(response.data))
        .catch(err => rej(err));
    });
  };
  internationalExchanges = () => {
    return new Promise((res, rej) => {
      axios
        .get(`${this.baseURL}/ref-data/exchanges?token=${this.token}`)
        .then(response => res(response.data))
        .catch(err => rej(err));
    });
  };
  // TODO: fix splits and dividends
  stock = {
    branch: "/stock",
    price: (symbol, params) => {
      return this.getData(this.stock.branch, symbol, "price", params);
    },
    company: (symbol, params) => {
      return this.getData(this.stock.branch, symbol, "company", params);
    },
    balanceSheet: (symbol, params) => {
      return this.getData(this.stock.branch, symbol, "balance-sheet", params);
    },
    book: (symbol, params) => {
      return this.getData(this.stock.branch, symbol, "book", params);
    },
    cashFlow: (symbol, params) => {
      return this.getData(this.stock.branch, symbol, "cash-flow", params);
    },
    ceoCompensation: (symbol, params) => {
      return this.getData(this.stock.branch, symbol, "ceo-compensation", params);
    },
    delayedQuote: (symbol, params) => {
      return this.getData(this.stock.branch, symbol, "delayed-quote", params);
    },
    dividends: (symbol, params) => {
      return this.getData(this.stock.branch, symbol, "dividends", params);
    },
    earnings: (symbol, params) => {
      return this.getData(this.stock.branch, symbol, `earnings`, params);
    },
    earningsToday: (symbol, params) => {
      return this.getData(this.stock.branch, symbol, `today-earnings`, params);
    },
    estimates: (symbol, params) => {
      return this.getData(this.stock.branch, symbol, `estimates`, params);
    },
    financials: (symbol, params) => {
      return this.getData(this.stock.branch, symbol, `financials`, params);
    },
    fundOwnership: (symbol, params) => {
      return this.getData(this.stock.branch, symbol, `fund-ownership`, params);
    },
    income: (symbol, params) => {
      return this.getData(this.stock.branch, symbol, `income`, params);
    },
    insiderRoster: (symbol, params) => {
      return this.getData(this.stock.branch, symbol, `insider-roster`, params);
    },
    insiderSummary: (symbol, params) => {
      return this.getData(this.stock.branch, symbol, `insider-summary`, params);
    },
    insiderTransactions: (symbol, params) => {
      return this.getData(this.stock.branch, symbol, `insider-transactions`, params);
    },
    institutionalOwnership: (symbol, params) => {
      return this.getData(this.stock.branch, symbol, `institutional-ownership`, params);
    },
    intradayPrices: (symbol, params) => {
      return this.getData(this.stock.branch, symbol, `intraday-prices`, params);
    },
    keyStats: (symbol, params) => {
      return this.getData(this.stock.branch, symbol, `stats`, params);
    },
    largestTrades: (symbol, params) => {
      return this.getData(this.stock.branch, symbol, `largest-trades`, params);
    },
    ohlc: (symbol, params) => {
      return this.getData(this.stock.branch, symbol, `ohlc`, params);
    },
    peers: (symbol, params) => {
      return this.getData(this.stock.branch, symbol, `peers`, params);
    },
    previousDayPrice: (symbol, params) => {
      return this.getData(this.stock.branch, symbol, `previous`, params);
    },
    priceTarget: (symbol, params) => {
      return this.getData(this.stock.branch, symbol, `price-target`, params);
    },
    quote: (symbol, params) => {
      return this.getData(this.stock.branch, symbol, `quote`, params);
    },
    recommendationTrends: (symbol, params) => {
      return this.getData(this.stock.branch, symbol, `recommendation-trends`, params);
    },
    splits: (symbol, params) => {
      return this.getData(this.stock.branch, symbol, `splits/next`, params);
    },
    volumeByVenue: (symbol, params) => {
      return this.getData(this.stock.branch, symbol, `volume-by-venue`, params);
    }
  };
};
