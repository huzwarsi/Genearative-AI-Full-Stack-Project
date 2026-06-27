const express = require('express')
const {register, logout} = require('../Controllers/authControllers')
const {login} = require('../Controllers/authControllers')

const authRouter = express.Router()

authRouter.post('/register',register)

authRouter.post('/login',login)
authRouter.get('/logout',logout)




module.exports = authRouter