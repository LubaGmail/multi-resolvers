const mongoose = require('mongoose')
const BookSchema = require('../models/BookSchema')

//  any name                  collection name
const books = mongoose.model('books', BookSchema)

// { Query: { books: [Function: books] } }
const bookResolver = {
    Query: {
        books (parent, args, context, info) {
            
            return books.find()
                .then (books => {
                    return books            // array of Book objects
                })
                .catch (err => {
                    console.error(err)
                })
        },
       
    }
}

module.exports = bookResolver


