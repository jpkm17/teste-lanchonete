const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    address: String
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

module.exports = CustomerModel 