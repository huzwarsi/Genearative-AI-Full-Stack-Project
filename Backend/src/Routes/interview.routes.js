const express = require('express');
const authUser = require('../Middleware/auth.middleware');
const interviewController = require('../Controllers/interview.controller');

const interviewRouter = express.Router();



interviewRouter.post('/', authUser, interviewController)

module.exports = interviewRouter