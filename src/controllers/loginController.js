const TITLE_LOGIN = 'Tela de login'

function login(req, res) {
    res.render('login', {
        title: TITLE_LOGIN
    })
}

function checkLogin(req, res) {
    const user = req.body.user
    const password = req.body.password

    if(user === 'Admin' && password === '12345') {
        res.redirect('/panel')
    } else{
        res.render('login', {
            title: TITLE_LOGIN,
            message:'Usuário ou senha incorretos!'
        })
    }
}

module.exports = {
    login,
    checkLogin
}