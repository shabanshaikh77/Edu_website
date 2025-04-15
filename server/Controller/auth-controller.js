const User = require("../models/user_models");
const bcrypt = require('bcryptjs');

const home = async (req, res) => {
    try {

        res.status(200).json({ message: "Welcpme to the world of web development" });
    } catch (error) {
        console.log(error);
    }
}

const register = async (req, res, next) => {
    try {
       
        const { username, email, phone, password } = req.body;

        const userexist = await User.findOne({ email });

        if (userexist) {
            return res.status(400).json({ message: "Email Already Exist" });
        }
        // bcrypt
        /* const saltround = 10;
         const encryptpassword = await bcrypt.hash(password, saltround);*/

        const usercreated = await User.create({
            username,
            email,
            phone,
            password,
        });

        res.status(200).json({
            message: "Registeration Successfull",
            token: await usercreated.generateToken(),
            userId: usercreated._id.toString(),
        });
    } catch (error) {
        //res.status(200).json("Internal Server Error");
        console.log(error);
        next(error);
    }
}


const login = async (req, res) => {
    try {
         const {email, password} = req.body;
         
         const userExist = await User.findOne({email}); 
      /*   console.log(userExist);*/
 
         if(!userExist)
         {
            res.status(401).json({message:"Invalid Login Credencial"});
         }
         
       //  const user = await bcrypt.compare(password, userExist.password);
      // second method

        const user =  await userExist.comparepassword(password);
         if(user)
         {
            res.status(200).json({
                message: "Login Successfull",
                token: await userExist.generateToken(),
                userId: userExist._id.toString(),
            });  
         }
         else{
            res.status(401).json({message : "Invalid Password or email"} ); 
         }
    }
    catch (error) {
        
        res.status(200).json({messge:"Internal Server Error"});
    }
}

const user = async (req, res) => {
    try {
      // const userData = await User.find({});
     const userData = req.user;
     
      return res.status(200).json({ userData });
    } catch (error) {
      console.log(` error from user route ${error}`);
    }
  }


module.exports = { home, register, login, user }