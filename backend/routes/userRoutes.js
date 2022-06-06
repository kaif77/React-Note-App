const express = require("express");
const router = express.Router();
const { userLogin, userRegister } = require("../controllers/userController");

// login user router
router.post("/login", userLogin);

// Registe user
router.post("/register", userRegister);

// exports router 
module.exports = router;