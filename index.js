const mongoose = require('mongoose')
const express = require('express')
const app = express()
const car = require('./routes/car')
app.use(express.json())
app.use('/api/cars/', car)
const port = process.env.PORT || 3003
app.listen(port, ()=> console.log('Escuchando Puerto: ' + port))

mongoose.connect('mongodb://localhost/carsdb',{useNewUrlParser:true, useFindAndModify:false})
    .then(()=> console.log('Conectado a MongoDb'))
    .catch(erro => console.log('No se ha conectado a MongoDb'))