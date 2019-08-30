const mongosee = require('mongoose')

const userSchema = new mongosee.Schema({
    name:{
        type: String,
        required: true
    },
    isCustomer: Boolean,
    email: String,
    date: {type:Date, default:Date.now}
})

const User = mongosee.model('user', userSchema)

module.exports = User