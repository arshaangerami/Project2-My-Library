const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    text: String
})

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    description: String,
    image: {
        path: String,
        name: String
    },
    owner: {type :mongoose.Schema.Types.ObjectId , ref : 'User'},
    commments: [commentSchema]
    

})

// creat the model
// export the model
module.exports = mongoose.model('Book', bookSchema)