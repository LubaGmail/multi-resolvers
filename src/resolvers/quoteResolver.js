const quoteResolver = {
    Query: {
        quote: (_, __, {dataSources}) => {
            console.log('quoteAPI', dataSources.quoteAPI)
            
            return dataSources.quoteAPI.getQuote();
        }
    }
}

module.exports = quoteResolver


