const { PDFParse } = require("pdf-parse");
const generateInterviewReport = require("../Services/Ai.Service");
const InterviewReportModel = require("../Models/interview.Model");

console.log("KEY:", process.env.GEMINI_API_KEY);
const GenerateInterviewController = async (req, res) => {
    try {
        const parser = new PDFParse({ data: req.file.buffer });
        const result = await parser.getText();
        const resumeContent = result.text;

        const { selfDescription, jobDescription } = req.body;

        const interViewReportByAi = await generateInterviewReport({
            resume: resumeContent,
            selfDescription,
            jobDescription
        });

        const interviewReport = await InterviewReportModel.create({
            user: req.user.id,
            resume: resumeContent,
            selfDescription,
            jobDescription,
            ...interViewReportByAi
        });

        return res.status(201).json({
            message: 'Interview report generated successfully',
            interviewReport
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Something went wrong', error: err.message });
    }
};

module.exports = GenerateInterviewController;