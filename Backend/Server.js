require('dotenv').config()
const app = require('./src/app.js');
const connectDB = require('./src/config/dataBase.js');



const PORT = process.env.Port || 8000;
connectDB()


app.listen(PORT,()=>{
    console.log('Server is running fine!!!');
    
})