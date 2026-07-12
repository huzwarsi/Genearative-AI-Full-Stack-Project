const express = require('express');
const authUser = require('../Middleware/auth.middleware');
const upload = require('../Middleware/file.middleware');
const { GenerateInterviewController, InterviewReportById, AllInterviewReports } = require('../Controllers/interview.controller');

const interviewRouter = express.Router();



interviewRouter.post('/', authUser, upload.single('file'),GenerateInterviewController)
interviewRouter.get('/report/:interviewID', authUser,InterviewReportById)
interviewRouter.get('/report', authUser,AllInterviewReports)


module.exports = interviewRouter