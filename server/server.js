require("dotenv").config();
const express = require("express");
const app = express();
const authRoute =  require('./router/auth-router');
const contactRoute = require('./router/contact-router');
const connectDB = require('./utils/db');
const errorMiddleware = require('./middleware/error-middleware');


app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use(errorMiddleware);


const port = 5000;

connectDB().then( () => 
{
    app.listen(port, ()=>{
    console.log(`Your App is running on port number : ${port}`);
});
});

