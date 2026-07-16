const express = require("express");
const Note = require("../models/Note");

const router = express.Router();


// GET all notes
router.get("/", async (req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    res.json(notes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// POST create note
router.post("/", async (req, res) => {
  try {
    const { title, subject, content } = req.body;

    // Validation
    if (!title || !content) {
      return res.status(400).json({
        error: "Title and content are required"
      });
    }


    const newNote = new Note({
      title,
      subject,
      content
    });


    const savedNote = await newNote.save();

    res.status(201).json(savedNote);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// DELETE note
router.delete("/:id", async (req, res) => {
  try {

    const deletedNote = await Note.findByIdAndDelete(req.params.id);

    if (!deletedNote) {
      return res.status(404).json({
        error: "Note not found"
      });
    }

    res.json({
      message: "Note deleted successfully"
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


module.exports = router;