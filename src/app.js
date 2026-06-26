const express = require('express')
const authRouter = require('./Routes/auth.Routes')

const app = express()


app.use('api/auth',authRouter)




module.exports = app