const express = require("express");

const admincontrollers = require("../Controller/admin-controllers");
const authMiddleware = require("../middleware/auth-middleware")
const Adminmiddleware = require("../middleware/admin-middleware");
const router = express.Router();


router.route("/users").get(authMiddleware,Adminmiddleware,admincontrollers.getallusers);

router.route("/users/delete/:id").delete(authMiddleware,Adminmiddleware,admincontrollers.deleteUserbyId);

router.route("/contacts").get(authMiddleware,Adminmiddleware,admincontrollers.getallcontacts);


module.exports = router; 
