const express = require("express");
const router = express.Router();
const {
  getAllNotesUser,
  addNewNote,
  getNoteById,
  updateNote,
  deleteNoteById,
  getNotesBySearch
} = require("../controllers/noteController");

// Get All Nodes
router.get("/", getAllNotesUser);

// Add new note
router.post("/", addNewNote);

// Get note by id
router.get("/:noteId", getNoteById);

// update note by Id
router.put("/:noteId", updateNote);

// delete note by Id
router.delete("/:noteId", deleteNoteById);

// search for notes
router.get("/search/:query", getNotesBySearch);

module.exports = router;


