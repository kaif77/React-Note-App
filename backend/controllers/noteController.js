const { findById } = require("../models/noteModel");
const Note = require("../models/noteModel");

// get all notes of the user
exports.getAllNotesUser = async (req, res) => {
  try {
    const notes = await Note.find();
    return res.status(200).json(notes);
  } catch (err) {
    return res.json({ errors: { message: err.message } });
  }
};

// Add new note
exports.addNewNote = async (req, res) => {
  const { title, description } = req.body;

  // Check if the note title is already existing
  const noteByTitle = await Note.findOne({ title });
  if (noteByTitle) {
    return res.json({ errors: { message: "Note title already exists" } });
  }

  //   crete a new note
  const newNote = new Note({
    title,
    description,
  });

  try {
    // Save note
    await newNote.save();
    return res.status(201).json({
      created: true,
      success: { message: "Note successfully created" },
    });
  } catch (err) {
    return res.json({
      errors: { message: Object.entries(err.errors)[0][1].message },
    });
  }
};

// Get note by Id
exports.getNoteById = async (req, res) => {
  const { noteId } = req.params;

  // check the length of  the note
  if (noteId.length !== 24) {
    return res.json({
      errors: { message: " Provided note Id is not a valid" },
    });
  }

  try {
    const note = await Note.findById(noteId);
    return res.status(200).json(note);
  } catch (err) {
    return res.json({
      errors: { message: Object.entries(err.errors)[0][1].message },
    });
  }
};

// Update note
exports.updateNote = async (req, res) => {
  const { noteId } = req.params;
  const { title, description } = req.body;

  // check the length of  the note
  if (noteId.length !== 24) {
    return res.json({
      errors: { message: " Provided note Id is not a valid" },
    });
  }

  // check if node available according to id
  const noteById = await Note.findById(noteId);
  if (!noteById) {
    return res.json({ errors: { message: "Note doesnt exists" } });
  }

  // Check note title already exists
  const noteTitle = await Note.findOne({ title });
  if (noteTitle) {
    if (noteTitle.id !== noteId) {
      return res.json({ errors: { message: "Note title already exists" } });
    }
  }

  try {
    await Note.findOneAndUpdate(
      { _id: noteId },
      { title, description },
      { new: true, runValidators: true }
    );
    res.status(200).json({
      created: true,
      success: { message: "Note updated successfully" },
    });
  } catch (err) {
    return res.json({
      errors: { message: Object.entries(err.errors)[0][1].message },
    });
  }
};

// delete Note  by Id
exports.deleteNoteById = async (req, res) => {
  const { noteId } = req.params;

  // check the length of  the note
  if (noteId.length !== 24) {
    return res.json({
      errors: { message: " Provided note Id is not a valid" },
    });
  }

  // check note available by Id
  const noteById = await Note.findById(noteId);
  if (!noteById) {
    return res.json({ errors: { message: "Note doesnt exists" } });
  }

  try {
    await Note.findByIdAndDelete(noteId);
    return res.status(200).json({
      created: true,
      success: { message: "Note deleted successfully" },
    });
  } catch (err) {
    return res.json({
      errors: { message: Object.entries(err.errors)[0][1].message },
    });
  }
};

// Get notes by search
exports.getNotesBySearch = async (req, res) => {
  const { query } = req.params;

  try {
    const regexQuery = new RegExp(query, "i");
    const notes = await Note.find({
      $or: [{ title: regexQuery }, { description: regexQuery }],
    });
    return res.status(200).json(notes);
  } catch (err) {
    return res.json({
      errors: { message: Object.entries(err.errors)[0][1].message },
    });
  }
};
