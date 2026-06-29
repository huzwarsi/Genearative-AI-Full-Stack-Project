const mongoose = require("mongoose");

async function connectDB() {
    try {
        await mongoose.connect(process.env.MongoURI);
        console.log("Successfully connected to MongoDB");
        
        return mongoose.connection;
        
    } catch (error) {
        console.error("Connection failed:", error);
        process.exit(1);
    }
}

module.exports = connectDB;
