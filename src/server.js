const {ApolloServer} = require('apollo-server');
require('dotenv').config();
require('./config/dbconnect')
const {merge} = require('lodash')
const bookResolver = require('./resolvers/bookResolver')
const bookTypeDefs = require('./types/bookTypeDefs')
const clubResolver = require('./resolvers/clubResolver')
const clubTypeDefs = require('./types/clubTypeDefs')
const quoteResolver = require('./resolvers/quoteResolver')
const quoteTypeDefs = require('./types/quoteTypeDefs')

const QuoteAPI = require('./datasources/quoteDS')

const resolvers = {}
/* 
    resolvers {
        Query: {
            club: [Function: club],
            books: [Function: books],
            quote: [Function: quote]
        }
    }
*/
const server = new ApolloServer({
    typeDefs: [clubTypeDefs, bookTypeDefs, quoteTypeDefs],
    resolvers: merge(resolvers, clubResolver, bookResolver, quoteResolver),
    dataSources: () => {
        return {
          quoteAPI: new QuoteAPI()
        }
    }
});

server.listen({port: process.env.PORT || 4000})
    .then( ({url}) => {
        console.log(`Server is ready at ${url}`);
    })

    

