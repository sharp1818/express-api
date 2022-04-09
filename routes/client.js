const express = require('express')

const router = express.Router()

const mongoose = require('mongoose')
const schema = mongoose.Schema

const schemaClient = new schema({
    firstname: String,
    email: String,
    phone: String,
    message: String
})


const ModelClient = mongoose.model('cliente', schemaClient)

module.exports = router

router.post('/enviarformulario', (req, res) => {
    const newClient = new ModelClient({
        firstname: req.body.firstname,
        email: req.body.email,
        phone: req.body.phone,
        message: req.body.message
    })
    newClient.save((err) => {
        if(!err){
            res.send('Mensaje Enviado!')
        }else{
            res.send(err)
        }
    })
})