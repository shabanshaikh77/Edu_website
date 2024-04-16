const mongoose = require("mongoose");

//const URI = "mongodb://127.0.0.1:27017/mern_admin";
//const URI = "mongodb+srv://MohdShaban:Shaban123@cluster0.y04tuvv.mongodb.net/mern_admin?retryWrites=true&w=majority";

const URI = process.env.MONGODB_URI;
const connectDB = async() =>
{

    try {
        await mongoose.connect(URI) ;
        console.log("Connection Successful with the database");
        
    } 
    catch (error) {
    console.error("Database Connetion Fail");
    console.log(error);
    process.exit(0);     
    }
};

 module.exports = connectDB;