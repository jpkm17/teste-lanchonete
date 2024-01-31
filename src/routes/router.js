const router = require('express').Router()

const loginRouter = require('../controllers/loginController')
const dashboardRouter = require('../controllers/dashboardController')

//Tela de login
router.get('/', loginRouter.login)
router.post('/checkLogin', loginRouter.checkLogin) // Confere os dados do forms

//Painel do administrador
router.get('/dashboard', dashboardRouter.dashboard)

//Cadastrar Cliente 
router.get('/regCustomer', dashboardRouter.pageReg)
router.post('/regCustomer/reg', dashboardRouter.regCustomer)

//Listar clientes
router.get('/listCustomer', dashboardRouter.listCustomers)
router.get('/listCustomer/remove/:id?', dashboardRouter.remove)

module.exports = router