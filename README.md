# 📚 StudyMate

StudyMate is a full-stack study management application that helps students create, organize, and manage their study notes efficiently.

The application provides a modern dashboard interface with note management features and AI-powered summarization capabilities.

---

## 🚀 Features

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



---

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
