const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

  const UserSchema = new mongoose.Schema({
  username:{
    type : String,
    require: true,
  },

  email:{
    type : String,
    require : true,
  },

  phone:{
    type : String,
    require : true,
  },
 
  password:{
    type : String,
    require : true,
  }, 
  isAdmin :{
    type : Boolean,
    default : false,
  },
});

// cheking password for login
UserSchema.methods.comparepassword = function(password)
{
  return  bcrypt.compare(password, this.password);
}


  
// Secure the passworld with decrypt
UserSchema.pre("save", async function(next)
{
   const user = this;
   if(!user.isModified("password"))
   {
    next();
   }

   try {
         const saltround = await bcrypt.genSalt(10);
         const hash_password = await bcrypt.hash(user.password,saltround);
         user.password = hash_password;
   } catch (error) {
    next(error);
   }
});


UserSchema.methods.generateToken = async function() {

  try {
    return jwt.sign(
      {
        userId: this._id.toString(),
        email: this.email,
        isAdmin : this.isAdmin,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn : "30d",
      }
    );
  }
  
  catch (error) {
    console.error(error);
  }
}


const User = new mongoose.model("User", UserSchema);

module.exports = User; 