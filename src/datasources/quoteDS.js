const {RESTDataSource} = require('apollo-datasource-rest');

const quoteUrl = "http://quotes.stormconsultancy.co.uk/random.json";

class QuoteAPI extends RESTDataSource {
    constructor() {
      super();
      this.baseURL = quoteUrl;
    }

    getQuote() {
        return this.get(quoteUrl);
    }
}

module.exports = QuoteAPI;