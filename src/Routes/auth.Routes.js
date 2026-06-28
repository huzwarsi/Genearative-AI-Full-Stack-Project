const express = require('express')
const {register, logout, getMe} = require('../Controllers/authControllers')
const {login} = require('../Controllers/authControllers')
const authUser = require('../Middleware/auth.middleware')

const authRouter = express.Router()

authRouter.post('/register',register)

authRouter.post('/login',login)
authRouter.get('/logout',logout)
authRouter.get('/get-me', authUser,getMe)





module.exports = authRouter