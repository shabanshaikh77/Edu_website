const { z } = require("zod");

const loginSchema = z.object({

    email: z
        .string({ require_error: "Email is required" })
        .trim()
        .email({ message: "Invalid Email address" })
        .min(3, { message: "Email must be atleast three charachter" })
        .max(255, { message: "Email must not be more than 255 character " }),

    password: z
        .string({ require_error: "Name is required" })
        .trim()
        .min(7, { message: "Password must be atleast seven charachter" })
        .max(1024, { message: "Password must not be more than 255 character " }),


});



const signupSchema = loginSchema.extend({
    username: z
        .string({ require_error: "Name is required" })
        .trim()
        .min(3, { message: "Name must be atleast three charachter" })
        .max(255, { message: "Name must be more than 255 character " }),
   
    phone: z
        .string({ require_error: "Name is required" })
        .trim()
        .min(10, { message: "Phone number must be equal to exactly 10 digit " })
        .max(25, { message: "Phone number must be equal to exactly 10 digit " }),
   

});

module.exports = { signupSchema, loginSchema };