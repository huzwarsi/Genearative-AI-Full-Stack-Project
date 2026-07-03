const app = require('./src/app.js');
require('dotenv').config()
const connectDB = require('./src/config/dataBase.js');
const generateInterviewReport = require('./src/Services/Ai.Service.js');
const invokeGeminiAi = require('./src/Services/Ai.Service.js');
const { resume, jobDescription, selfDescription } = require('./src/Services/temp.js');



const PORT = process.env.Port || 8000;
connectDB()
generateInterviewReport({resume,jobDescription,selfDescription})


app.listen(PORT,()=>{
    console.log('Server is running fine!!!');
    
})