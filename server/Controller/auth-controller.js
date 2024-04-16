const User = require("../models/user_models");
const bcrypt = require('bcryptjs');

const home = async (req, res) => {
    try {

        res.status(200).json({ message: "Welcpme to the world of web development" });
    } catch (error) {
        console.log(error);
    }
}

const register = async (req, res) => {
    try {
        console.log(req.body);
        const { username, email, phone, password } = req.body;

        const userexist = await User.findOne({ email });

        if (userexist) {
            return res.status(400).json({ msg: "Email ALready Exist" });
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
            msg: "Registeration Successfull",
            token: await usercreated.generateToken(),
            userId: usercreated._id.toString(),
        });
    } catch (error) {
        //res.status(200).json("Internal Server Error");
        next(error);
    }
}


const login = async (req, res) => {
    try {
         const {email, password} = req.body;
         
         const userExist = await User.findOne({email});
         console.log(userExist);
 
         if(!userExist)
         {
            res.status(401).json("Invalid Login Credencial");
         }
       //  const user = await bcrypt.compare(password, userExist.password);
      // second method

        const user =  await userExist.comparepassword(password);
         if(user)
         {
            res.status(200).json({
                msg: "Login Successfull",
                token: await userExist.generateToken(),
                userId: userExist._id.toString(),
            });  
         }
         else{
            res.status(401).json("message : Invalid Password or email "); 
         }
    }





    catch (error) {
        res.status(200).json("Internal Server Error");
    }
}


module.exports = { home, register, login }