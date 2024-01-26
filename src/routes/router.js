const router = require('express').Router()

const loginRouter = require('../controllers/loginController')


//Tela de login
router.get('/', loginRouter.login)
router.post('/checkLogin', loginRouter.checkLogin) // Confere os dados do forms

module.exports = router