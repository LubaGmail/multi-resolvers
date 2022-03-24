const { gql } = require('apollo-server')

const clubTypeDefs = gql`
    type Query {
        club: [Member!]
    }

    type Member {
        id: ID,
        name: String,
        age: Int,
        retired: Boolean
    }
`

module.exports = clubTypeDefs