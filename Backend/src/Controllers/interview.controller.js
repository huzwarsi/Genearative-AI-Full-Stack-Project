const { PDFParse } = require("pdf-parse");
const generateInterviewReport = require("../Services/Ai.Service");
const InterviewReportModel = require("../Models/interview.Model");

// console.log("KEY:", process.env.GEMINI_API_KEY);
const GenerateInterviewController = async (req, res) => {
    try {
        const uploadedFile = req.files?.resume?.[0] || req.file;
        let resumeContent = '';

        if (uploadedFile?.buffer) {
            const parser = new PDFParse({ data: uploadedFile.buffer });
            const result = await parser.getText();
            resumeContent = result.text || '';
        }

        const { selfDescription = '', jobDescription = '' } = req.body;

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


const InterviewReportById = async(req,res)=>{

    const {interviewID} = req.params

    const interviewReportById = await InterviewReportModel.findOne(({
        _id : interviewID,
        user : req.user.id
    }))

    return res.status(200).json({
        message : "Interview Report fetched successfully",
        interviewReportById
    })  


}

const AllInterviewReports = async(req,res)=>{

   

    const Report = await InterviewReportModel.find({
        user : req.user.id
    }).sort({ createdAt: -1 });
    return res.status(200).json({
        message : "All Interview Reports fetched successfully",
        Report
    })  
}
module.exports = {GenerateInterviewController,InterviewReportById, AllInterviewReports};