const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    isCustomer: Boolean,
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    date: {type:Date, default:Date.now}
})

userSchema.methods.generateJWT = function(){
    return jwt.sign({_id: this._id, name: this.name}, process.env.SECRET_KEY_JWT_CAR_API)
}

const User = mongoose.model('user', userSchema)

module.exports = User