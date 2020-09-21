const db = require('../db/connection')
const Blog = require('../models/blog')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const blogs = 
    [
        {
            "title": "The Ronas",
            "author": "Rona Virus",
            "date": "09-21-2020",
            "body":  "Negative, sir",
            "imgURL":  " "  
        },
        {
            "title": "Happy Monday!",
            "author": "Kenneth Palces",
            "date": "09-21-2020",
            "body": "Today is Monday.",
            "imgURL": " "
        },
        {
            "title": "Movie delay",
            "author": "Aleks Bozek",
            "date":  "09-21-2020",
            "body":  "Venom 2 was supposed to drop in about two weeks.  Will be released in June next year.",
            "imgURL": "testtext"
        },
        {
            "title": "How many coders does it take to screw in a lightbulb",
            "author": " Tyler Huyser",
            "date": "9/21/2020",
            "body": "Blah Blah Blah Bleh bleh bleh blurb blurb blurb",
            "imgURL": "https://images.unsplash.com/photo-1552862750-746b8f6f7f25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
            }
       
    ]
    await Blog.insertMany(blogs)
    console.log("Created blogs!")
}
const run = async () => {
    await main()
    db.close()
}

run()