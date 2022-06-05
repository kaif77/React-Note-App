const express = require('express');
const router = express.Router();
const { getAllNotesUser, addNewNote } = require('../controllers/noteController');

// Get All Nodes
router.get('/', getAllNotesUser);

// Add new note
router.post('/', addNewNote);

// router.get

module.exports = router;