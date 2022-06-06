const mongoose = require('mongoose');
const {validateName,validateUsername,validateEmail } =require('../helpers/customValidation')

// Create user schema 
const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, "Enter full name"],
        minlength: [5, "Minimum length of the full name is 5 characters"],
        maxlength: [50, "Maximum length of the full name is 25 characters"],
        validate: [validateName, "Enter name only using letters and numbers"],
    },
    email: {
        type: String,
        required: [true, "Enter email address"],
        minlength: [10, "Minimum length of the email address is 10 characters"],
        maxlength: [150, "Maximum length of the email address is 150 characters"],
        validate: [validateEmail, "Enter valid email address"],
    },
    userName: {
        type: String,
        required: [true, "Enter username"],
        minlength: [8, "Minimum length of the username is 10 characters"],
        maxlength: [20, "Maximum length of the username is 20 characters"],
        validate: [validateUsername, "Enter username only using letters and numbers"],
    },
    password: {
        type: String,
        required: [true, "Enter password"],
        minlength: [8, "Minimum length of the password is 10 characters"],
        maxlength: [150, "Maximum length of the password is 150 characters"],
    },


},
{
    timestamps: true
}
);

module.exports = mongoose.model("User", userSchema);