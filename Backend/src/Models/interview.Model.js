const mongoose = require('mongoose');

// 1. Pehle sub-schemas define honge taaki interviewReportSchema unhe use kar sake
const technicalQuestionSchema = new mongoose.Schema({
    question: { // 'questions' ko singular 'question' kiya
        type: String,
        required: [true, 'Technical Question is required']
    },
    intention: {
        type: String,
        required: [true, 'Intention is required'] // 'intention' capitalized
    },
    answer: {
        type: String,
        required: [true, 'Answer is required'] // 'type' ki jagah 'required' kiya
    }
}, {
    _id: false
});

const behavioralQuestionsSchema = new mongoose.Schema({ // Spelling 'behaviourial' se 'behavioral' ki
    question: { // 'questions' ko singular 'question' kiya
        type: String,
        required: [true, 'Behavioral Question is required'] // Message correct kiya
    },
    intention: {
        type: String,
        required: [true, 'Intention is required']
    },
    answer: {
        type: String,
        required: [true, 'Answer is required'] // 'type' ki jagah 'required' kiya
    }
}, {
    _id: false
});

const skillGapSchema = new mongoose.Schema({ // PascalCase se camelCase kiya (SkillGapSchema -> skillGapSchema)
    skill: { // 'Skill' ko lowercase 'skill' kiya
        type: String,
        required: [true, 'Skill is required'] // Grammatically correct kiya
    },
    severity: {
        type: String,
        enum: ['low', 'medium', 'high'],
        required: [true, 'Severity is required']
    }
}, {
    _id: false
});

const preparationPlanSchema = new mongoose.Schema({
    day: {
        type: Number,
        required: [true, "Day is required"]
    },
    focus: {
        type: String,
        required: [true, "Focus is required"]
    },
    tasks: [{
        type: String,
        required: [true, "Task is required"]
    }]
}, {
    _id: false // Agar yeh bhi main schema ka hissa banega toh _id false rakhna behtar hai
});

// 2. Main Schema jo baaki sub-schemas ko use karega
const interviewReportSchema = new mongoose.Schema({
    jobDescription: {
        type: String,
        required: [true, "Job description is required"]
    },
    resume: {
        type: String,
    },
    selfDescription: {
        type: String,
    },
    matchScore: {
        type: Number,
        min: 0,
        max: 100,
    },
    technicalQuestions: [technicalQuestionSchema],
    behavioralQuestions: [behavioralQuestionsSchema], // Spelling aur reference match kiya
    skillGap: [skillGapSchema], // Variable name correct kiya
    preparationPlan: [preparationPlanSchema] // preparationPlanSchema ko main schema mein add kiya
});

// Model Export
const InterviewReport = mongoose.model('InterviewReport', interviewReportSchema);
module.exports = InterviewReport;
