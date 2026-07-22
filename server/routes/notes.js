const express = require("express");
const router = express.Router();

const {
  getNotes,
  getNote,
  createNote,
  updateNote,
  deleteNote,
  generateNoteSummary,
  generateNoteQuiz,
  getStats,
  getRecentNotes
} = require("../controllers/noteController");


// GET all notes
router.get("/", getNotes);

// Dashboard Stats
router.get("/stats/dashboard", getStats);

router.get("/recent/dashboard", getRecentNotes);


// GET single note
router.get("/:id", getNote);


// CREATE note
router.post("/", createNote);


// UPDATE note
router.put("/:id", updateNote);


// DELETE note
router.delete("/:id", deleteNote);


// AI Summary
router.post("/:id/summary", generateNoteSummary);


// AI Quiz
router.post("/:id/quiz", generateNoteQuiz);





module.exports = router;