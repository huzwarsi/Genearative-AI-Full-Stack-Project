const express = require('express');
const authUser = require('../Middleware/auth.middleware');
const interviewController = require('../Controllers/interview.controller');
const GenerateInterviewController = require('../Controllers/interview.controller');
const upload = require('../Middleware/file.middleware');

const interviewRouter = express.Router();



interviewRouter.post('/', authUser, upload.single('file'),GenerateInterviewController)

module.exports = interviewRouter