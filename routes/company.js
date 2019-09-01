const express = require('express')
const {Company} = require('../models/company')
const router = express.Router()

router.get('/', async(req, res)=> {
    const companies = await Company.find()
    res.send(companies)
})

router.get('/:id', async(req, res)=>{
    const company = await Company.findById(req.params.id)
    if(!company) return res.status(404).send('No hemos encontrado una fabricante con ese ID')
    res.send(company)
})

router.post('/',async(req, res)=>{

    const company = new Company({
        name: req.body.name,
        country: req.body.country
    })

    const result = await company.save()
    res.status(201).send(result)
})

router.put('/:id', async (req, res)=>{

    const company = await Company.findByIdAndUpdate(req.params.id,{
        name: req.body.name,
        country: req.body.country
    },
    {
        new: true
    })

    if(!company){
        return res.status(404).send('El fabricante con ese ID no esta')
    }
    
    res.status(204).send()
})

router.delete('/:id', async(req, res)=>{

    const company = await Company.findByIdAndDelete(req.params.id)

    if(!company){
        return res.status(404).send('El coche con ese ID no esta, no se puede borrar')
    }

    res.status(200).send('coche borrado')

})

module.exports = router