const express = require("express");
const router = express.Router();
const { userLogin, userRegister, renewAccessToken } = require("../controllers/userController");

// login user router
router.post("/login", userLogin);

// Registe user
router.post("/register", userRegister);

router.post("/renewAccessToken", renewAccessToken);

// exports router 
module.exports = router;