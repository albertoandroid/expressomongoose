const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    isCustomer: Boolean,
    email: String,
    date: {type:Date, default:Date.now}
})

const User = mongoose.model('user', userSchema)

module.exports = User