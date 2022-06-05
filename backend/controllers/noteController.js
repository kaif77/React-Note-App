// get all notes of the user
exports.getAllNotesUser = async (req, res) => {
    res.status(200).json("This get all notes of the user");
}

// Add new note
exports.addNewNote = async (req, res) => {
    res.status(201).json("New Note has been added");
}