const mongoose = require("mongoose");
const {validateTitle} = require('../helpers/customValidation');
// create a new schema
const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Enter a title"],
      minlength: [5, "Minimum length of the title is 5 characters"],
      maxlength: [25, "Maximum length of the title is 25 characters"],
      validate: [validate, "Enter title only using letters and numbers"],
    },
    description: {
      required: [true, "Enter a description"],
      minlength: [5, "Minimum length of the description is 5 characters"],
      maxlength: [25, "Maximum length of the description is 25 characters"],
    },
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Note',noteSchema);