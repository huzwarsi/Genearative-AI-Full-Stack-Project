const express = require('express')
const register = require('../Controllers/authControllers')

const authRouter = express.Router()

authRouter.post('/register',register)


module.exports = authRouter