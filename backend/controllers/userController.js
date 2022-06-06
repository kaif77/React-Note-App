const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv/config");

// login user
exports.userLogin = async (req, res) => {
  const { userName, password } = req.body;

  //  check username exists
  const userByUsername = await User.findOne({ userName });
  if (!userByUsername) {
    return res.json({ errors: { message: "Username not found" } });
  }

  // check password matches
  const passMatch = await bcrypt.compare(password, userByUsername.password);
  if (!passMatch) {
    return res.json({ errors: { message: "wrong password" } });
  }

  // Generate accessToken
  const accessToken = jwt.sign(
    {
      id: userByUsername._id,
      email: userByUsername.email,
    },
    process.env.ACCESS_SECRET_KEY,
    {
      expiresIn: "1h",
    }
  );

  return res
    .status(200)
    .json({ auth: true, token: accessToken, userId: userByUsername._id });
};

// Register user
exports.userRegister = async (req, res) => {
  const { fullName, email, userName, password } = req.body;

  //   check username or email already exists
  const userByUsernameOrEmail = await User.findOne({
    $or: [{ userName: userName }, { email: email }],
  });

  if (userByUsernameOrEmail) {
    return res.json({
      errors: { message: "username or email already in use" },
    });
  }

  //   Password hashing
  const hashPassword = await bcrypt.hash(password, 8);

  const newpass = password.length >= 8 ? hashPassword : false;

  const newUser = new User({
    fullName,
    email,
    userName,
    password: newpass,
  });

  try {
    await newUser.save();
    return res.status(201).json({
      created: true,
      success: { message: "user registered successfully" },
    });
  } catch (err) {
    return res.json({
      errors: { message: Object.entries(err.errors)[0][1].message },
    });
  }
};
