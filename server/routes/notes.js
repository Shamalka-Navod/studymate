const express = require("express");
const router = express.Router();

const {
  getNotes,
  getNote,
  createNote,
  updateNote,
  deleteNote,
} = require("../controllers/noteController");

// GET all notes
router.get("/", getNotes);

// GET single note
router.get("/:id", getNote);

// CREATE note
router.post("/", createNote);

// UPDATE note
router.put("/:id", updateNote);

// DELETE note
router.delete("/:id", deleteNote);

module.exports = router;