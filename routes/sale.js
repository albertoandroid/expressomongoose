const express = require('express')
const Sale = require('../models/sale')
const Car = require('../models/car')
const User = require('../models/user')
const router = express.Router()

router.get('/', async(req, res)=>{
    const sales = await Sale.find()
    res.send(sales)
})

router.post('/', async(req, res)=>{
    const user = await User.findById(req.body.userId)
    if(!user) return res.status(400).send('Usuario no existe')

    const car = await Car.findById(req.body.carId)
    if(!car) return res.status(400).send('Coche no existe')

    if(car.sold === true) return res.status(400).send('Ese coche ya ha sido vendido')

    const sale = new Sale({
        user:{
            _id: user._id,
            name: user.name,
            email: user.email
        },
        car:{
            _id: car._id,
            model: car.model
        },
        price: req.body.price
    })

    const result = await sale.save()
    user.isCustomer = true
    user.save()
    car.sold = true
    car.save()
    res.status(201).send(result)

})