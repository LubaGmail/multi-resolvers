insert docs
    node util/mongo.js

Sandbox
    query anyName {
        club {
            name
            age
        }
        books {
            name
            price
        }
        quote {
            quote
            author
        }
    }
   
quote returns object
    return {
        quote: 'To be, or not to be, that is the question',
        author: 'William Shakespeare'
    }
            



    

