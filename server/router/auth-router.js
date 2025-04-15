const express = require("express");
const router = express.Router();

const authControllers = require('../Controller/auth-controller');
const {signupSchema,loginSchema} = require('../validator/auth_validator');

const validate = require('../middleware/validate_middleware');
const authMiddleware = require('../middleware/auth-middleware');

// ROuting by controllers method made it more easier
router.route("/").get(authControllers.home);
router.route("/register").post(validate(signupSchema),authControllers.register);
router.route("/login").post(validate(loginSchema),authControllers.login);


router.route("/user").get(authMiddleware,authControllers.user); 


/*  BY SIMPLE ROUTER METHOD
router.route("/").get((req,res)=>{
   
    res.status(200).send("Welcome to the world of web development of mern series using router");
    
    });
    
    router.route("/register").get( (req,res)=>{
   
        res.status(200).send("Welcome to Our Registration page");
        
        });
    
   */ 
module.exports = router; 