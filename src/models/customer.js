const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    nome: String,
    email: String,
    telefone: String,
    endereco: String
})

const CustomerModel = mongoose.model('Customer', schema)

/* 
ADICIONA UM USUARIO NO BANCO E SALVA 
const newCustomer = new CustomerModel({ 
    nome: 'Teste nome',
    email:'', 
    telefone:'',
    endereco:'' 
})
newCustomer.save()
*/ 

module.exports = Model 