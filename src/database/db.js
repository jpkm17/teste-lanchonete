const mongoose = require('mongoose')

const model = require('../models/customer')

function connect() {
    mongoose.connect('mongodb://localhost:27017/teste-lanchonete')

    const db = mongoose.connection

    db.once('open', () => console.log('Connected do database!'))

    db.on('error', () => connect.error.bind(console, 'Connection error:'))
}

module.exports = {
    connect
}