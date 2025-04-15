require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const authRoute =  require('./router/auth-router');
const contactRoute = require('./router/contact-router');
const serviceroute = require('./router/service-router');
const adminrouter = require('./router/admin-router');
const connectDB = require('./utils/db');
const errorMiddleware = require('./middleware/error-middleware');

var corsOptions = {
    origin: "http://127.0.0.1:5173",
    methods: "GET, POST, DELETE, PATCH, HEAD",
    Credential: true,
  };
app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/auth", authRoute); 
app.use("/api/form", contactRoute);
app.use("/api/data", serviceroute);
app.use("/api/admin", adminrouter);
app.use(errorMiddleware);


const port = 5000;
   
connectDB().then( () => 
{
    app.listen(port, ()=>{
    console.log(`Your App is running on port number : ${port}`);
});
});

