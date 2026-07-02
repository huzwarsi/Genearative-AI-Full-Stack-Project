const app = require('./src/app.js');
require('dotenv').config()
const connectDB = require('./src/config/dataBase.js');
const invokeGeminiAi = require('./src/Services/Ai.Service.js');


const PORT = process.env.Port || 8000;
connectDB()
invokeGeminiAi()

app.listen(PORT,()=>{
    console.log('Server is running fine!!!');
    
})