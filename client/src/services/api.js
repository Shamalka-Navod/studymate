import axios from "axios";


const api = axios.create({

  baseURL: "http://localhost:5000/api",

  headers: {
    "Content-Type": "application/json",
  },

});



// ====================
// NOTES CRUD
// ====================

// Get all notes
export const getNotes = () => {

  return api.get("/notes");

};


// Get single note
export const getNote = (id) => {

  return api.get(`/notes/${id}`);

};


// Create note
export const createNote = (data) => {

  return api.post(
    "/notes",
    data
  );

};


// Update note
export const updateNote = (id, data) => {

  return api.put(
    `/notes/${id}`,
    data
  );

};


// Delete note
export const deleteNote = (id) => {

  return api.delete(
    `/notes/${id}`
  );

};





// ====================
// AI FEATURES
// ====================


// Generate AI Summary
export const generateSummary = (id) => {

  return api.post(
    `/notes/${id}/summary`
  );

};



// Generate AI Quiz
export const generateQuiz = (id) => {

  return api.post(
    `/notes/${id}/quiz`
  );

};

export const getDashboardStats = () =>
  api.get("/notes/stats/dashboard");

export const getRecentNotes = () =>
  api.get("/notes/recent/dashboard");

export default api;