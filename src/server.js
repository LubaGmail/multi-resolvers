const {ApolloServer} = require('apollo-server');
require('dotenv').config();
require('./config/dbconnect')
const {merge} = require('lodash')
const bookResolver = require('./resolvers/bookResolver')
const bookTypeDefs = require('./types/bookTypeDefs')
const clubResolver = require('./resolvers/clubResolver')
const clubTypeDefs = require('./types/clubTypeDefs')

// { Query: { books: [Function: books] } }
const resolvers = {}

const server = new ApolloServer({
    typeDefs: [clubTypeDefs, bookTypeDefs],
    resolvers: merge(resolvers, clubResolver, bookResolver)
});

console.log('server.resolvers', resolvers)

server.listen({port: process.env.PORT || 4000})
    .then( ({url}) => {
        console.log(`Server is ready at ${url}`);
    })

    

