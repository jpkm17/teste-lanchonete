const CustomerModel = require('../models/customer')

function dashboard(req, res) {
    res.render('dashboard', {
        title: "Admin dashboard"
    })
}

function pageReg(req, res) {
    res.render('register', {
        title: "Customer Register"
    })
}

function regCustomer(req, res) {
    const {
        name,
        email,
        phone,
        address
    } = req.body

    const register = new CustomerModel({
        name,
        email,
        phone,
        address
    })

    register.save()

    res.render('register',{
        title: "Customer Register",
        message: 'Cadastro realizado com sucesso!'
    })
}

module.exports = {
    dashboard,
    pageReg,
    regCustomer,
}