HEAD
# 📚 StudyMate

StudyMate is a full-stack study management application that helps students create, organize, and manage their study notes efficiently.

The application provides a modern dashboard interface with note management features and AI-powered summarization capabilities.

# 📚 StudyMate - AI Powered Study Notes Manager

StudyMate is a full-stack AI-powered study management application that helps students create, organize, summarize, and test their study notes using Artificial Intelligence.

The application allows students to manage learning materials efficiently with AI-generated summaries and quizzes.


---

## 🚀 Features

HEAD
### Frontend (React + Vite)

✅ Modern Dashboard UI  
✅ Responsive Design  
✅ Create Study Notes  
✅ View Notes  
✅ Edit Notes  
✅ Delete Notes  
✅ Search Notes  
✅ Loading States  
✅ Empty State UI  
✅ Toast Notifications  
✅ Clean Component Structure  


### Backend (Node.js + Express)

✅ REST API  
✅ CRUD Operations  
✅ Data Validation  
✅ Error Handling  
✅ MongoDB Integration  


### AI Features

✅ AI Note Summary Generation  
✅ Smart Study Assistance  


---

## 🛠️ Technologies Used


### Frontend

- React.js
- Vite
- Tailwind CSS
- Axios
- React Hot Toast


### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose


### Tools

- Git & GitHub
- VS Code
- Postman


---

# 📂 Project Structure

studymate/

│
├── client/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── App.jsx
│ │ └── main.jsx
│ │
│ ├── package.json
│ └── vite.config.js
│
│
├── server/
│ ├── config/
│ ├── models/
│ ├── routes/
│ ├── server.js
│ └── package.json
│
│
├── landing/
│
├── README.md
└── .gitignore

### 📝 Note Management
- Create study notes
- View all notes
- Update existing notes
- Delete notes
- Search notes

### 🤖 AI Features (Groq AI)
- Generate AI summaries from study notes
- Generate AI-powered MCQ quizzes
- Automatic JSON quiz generation
- Interactive quiz answering system

### 📊 Dashboard
- Total notes statistics
- Subject count
- AI summary count
- Quiz count
- Recent notes activity

### 🎨 UI Features
- Modern responsive UI
- Dark / Light mode
- Sidebar navigation
- Dashboard cards
- Interactive quiz modal
- Clean card-based design

---

# 🛠️ Technologies Used

## Frontend

- React JS
- Vite
- Tailwind CSS
- React Router
- Axios
- React Icons
- React Hot Toast



## Backend

HEAD


# ⚙️ Installation & Setup


## Clone Repository

```bash
git clone https://github.com/Shamalka-Navod/studymate.git

Frontend Setup

Go to client folder:

cd client

Install dependencies:

npm install

Run React application:

npm run dev

Backend Setup

Go to server folder:

cd server

Install dependencies:

npm install

Create .env file:

PORT=5000

MONGODB_URI=your_mongodb_connection_string

Run backend:

npm run dev

🔗 API Endpoints
Notes
Get All Notes
GET /api/notes
Create Note
POST /api/notes
Update Note
PUT /api/notes/:id
Delete Note
DELETE /api/notes/:id


👨‍💻 Developer

Shamalka Navod

GitHub:
https://github.com/Shamalka-Navod

📌 Future Improvements
Real AI integration with Claude/OpenAI
User Authentication
Cloud Deployment
File Upload Support
Study Progress Tracking
MCP Server Integration

- Node.js
- Express.js
- MongoDB
- Mongoose


## Artificial Intelligence

- Groq API
- Llama AI Models
- OpenAI Compatible API

---

# 📂 Project Structure
StudyMate

│
├── client
│ ├── src
│ │ ├── components
│ │ ├── pages
│ │ ├── context
│ │ ├── services
│ │ └── App.jsx
│
│
├── server
│ ├── controllers
│ ├── models
│ ├── routes
│ ├── services
│ ├── server.js
│ └── .env
│
└── README.md


---

# ⚙️ Installation & Setup

## 1. Clone Repository

```bash
git clone https://github.com/your-username/studymate.git

Backend Setup

Go to server folder:
cd server

Install dependencies:
npm install

Create .env file:
MONGODB_URI=mongodb+srv://studymate:StudyMate123@cluster0.78o2jrr.mongodb.net/studymate?retryWrites=true&w=majority&appName=Cluster0
PORT=5000
GROQ_API_KEY=YOUR_GROQ_API_KEY

Run backend:
npm run dev

Server runs on:
http://localhost:5000

Frontend Setup
Open another terminal:
cd client

Install dependencies:
npm install

Run React app:
npm run dev

Frontend runs on:
http://localhost:5173

🔌 API Endpoints
Notes
Method	Endpoint	Description
GET	/api/notes	Get all notes
GET	/api/notes/:id	Get single note
POST	/api/notes	Create note
PUT	/api/notes/:id	Update note
DELETE	/api/notes/:id	Delete note
AI
Method	Endpoint	Description
POST	/api/notes/:id/summary	Generate AI Summary
POST	/api/notes/:id/quiz	Generate AI Quiz
Dashboard
Method	Endpoint	Description
GET	/api/notes/stats/dashboard	Dashboard statistics

🧠 AI Workflow
1.Student creates a note
2.Note content is sent to Groq AI
3.AI generates:
   Summary
   Questions
4.Results are displayed in the application

👨‍💻 Developer

Shamalka Navod

BICT Undergraduate
Rajarata University of Sri Lanka

📌 Future Improvements
User authentication
Student profiles
Notifications
Progress tracking
AI study assistant chatbot

