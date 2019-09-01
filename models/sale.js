const mongoose = require('mongoose')

const saleSchema = new mongoose.Schema({
    user:{
        type: new mongoose.Schema({
            name: String,
            email: String
        }),
        required: true
    },
    car:{
        type: new mongoose.Schema({
            model: String
        }),
        required: true
    },
    price: Number,
    date: {type: Date, default:Date.now}
})

const Sale = mongoose.model('sale', saleSchema)

module.exports = Sale