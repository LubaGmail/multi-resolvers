const { gql } = require('apollo-server')

const quoteTypeDefs = gql`
    type Query {
       quote: Quote
    }

    type Quote {
        quote: String,
        author: String
    }
`

module.exports = quoteTypeDefs