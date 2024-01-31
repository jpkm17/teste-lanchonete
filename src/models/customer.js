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
    name: 'Teste nome',
    email:'teste@gmail.com', 
    phone:'999990',
    address:'casa da mae joana' 
})
newCustomer.save()
*/ 

module.exports = CustomerModel 