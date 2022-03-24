const club = require('../data/club')

const clubResolver = {
    Query: {
        club (parent, args, context, info) {
            return club
        },
    }
}

module.exports = clubResolver


