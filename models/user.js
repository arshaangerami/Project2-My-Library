const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    googleId:String,
    name:String,
    email:String,
    isAdmin:Boolean

})

// creat the model
// export the model
module.exports = mongoose.model('User', userSchema)