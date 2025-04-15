const User = require("../models/user_models");
const Contact = require("../models/contact-model");


const getallusers = async (req, res, next) => {
    try {
        const users = await User.find({},{password : 0});
       
        if (!users || users.length === 0) {
            return res.status(404).json({ message: "No users found" });
        }
        return res.status(200).json(users);
    } catch (error) {
        console.log(error);
        next(error); // Pass the error to the error-handling middleware
    }
};

const getallcontacts = async (req, res, next) => {
    try {
        const contacts = await Contact.find();

        if (!contacts || contacts.length === 0) {
            return res.status(404).json({ message: "No Contacts found" });
        }
        return res.status(200).json(contacts);
    } catch (error) {
        console.log(error);
        next(error); // Pass the error to the error-handling middleware
    }
};

//User delete logic
const deleteUserbyId = async(req,res) => {
    try {
        const id = req.params.id;
        await User.deleteOne({_id : id});
        return res.status(200).json({message :  "User Deleted Successfully"}); 
    } catch (error) {
        
    }
};

    
module.exports = {getallusers, getallcontacts,deleteUserbyId};
