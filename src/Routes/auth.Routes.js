const express = require('express')
const {register} = require('../Controllers/authControllers')
const {login} = require('../Controllers/authControllers')

const authRouter = express.Router()

authRouter.post('/register',register)

authRouter.post('/login',login)



module.exports = authRouter