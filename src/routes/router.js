const router = require('express').Router()

const loginRouter = require('../controllers/loginController')
const panelRouter = require('../controllers/panelController')

//Tela de login
// router.get('/', loginRouter.login)
router.post('/checkLogin', loginRouter.checkLogin) // Confere os dados do forms

//Painel do administrador
router.get('/panel', panelRouter.dashboard)

//Cadastrar Cliente 
router.get('/regCustomer', panelRouter.pageReg)
router.post('/regCustomer/reg', panelRouter.regCustomer)

module.exports = router