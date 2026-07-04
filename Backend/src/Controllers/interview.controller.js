const { PDFParse } = require("pdf-parse");
const generateInterviewReport = require("../Services/Ai.Service");
const InterviewReportModel = require("../Models/interview.Model");

const GenerateInterviewController = async(req,res)=> {

    const resume = req.file;
    const resumeContent = await PDFParse(req.file.buffer)

    const {selfDescription, jobDescription} = req.body

    const interViewReportByAi = await generateInterviewReport({
        resume : resumeContent,
        selfDescription,
        jobDescription
    })


    const interviewReport = await InterviewReportModel.create({
        user :  req.user.id,
        resume : resumeContent,
        selfDescription,
        jobDescription,
        ...interViewReportByAi

    })

    return res.status(201).json({
        message : 'Interview report generated successfully',
        interviewReport
    })
}

module.exports = GenerateInterviewController