# Swati_T_2023tm93538_FSD

Language Learning Portal

**Overview**
The Language Learning Portal is a web application designed to help users learn new languages through courses, quizzes, and progress tracking. It is built using a microservice architecture with a Node.js backend and a React.js frontend.

**Features**

User authentication (registration, login, password )
Course browsing and enrollment
Interactive quizzes and exercises
User progress tracking

**Tech Stack**

Frontend:React.js

React Router

Axios

Backend:

Node.js

Express.js

REST API

Database:

MySQL 

language-learning-portal/
├── backend/               # Backend code
│   └── server.js          # Backend entry point
├── frontend/              # Frontend code
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── pages/         # Page components
│   │   ├── App.js         # React app entry
│   │   └── index.js       # Main entry file
│   └── public/
├── README.md              # Documentation

**Getting Started**

**Prerequisites**

Node.js (v16+)

MySQL Server

npm or yarn

Setup

Clone the repository:

git clone https://github.com/Swati-Tarafdar-code/Swati_2023tm93538_FSA.git

cd languageLearningPortal

Navigate to the backend directory:cd backend

Install dependency:npm install

Start backend service: npm start

Navigate Frontend: cd ../frontend

Install dependencies: npm install

Start development server: npm start

Access the application at http://localhost:3000


**Overview**

The Language Learning Portal is a web application designed to help users learn new languages through courses, quizzes, and progress tracking. It is built using a microservice architecture with a Node.js backend and a React.js frontend.

**Features**

User authentication (registration, login, password reset)

Course browsing and enrollment

Interactive quizzes and exercises

User progress tracking

Admin dashboard for course management

**Tech Stack**

**Frontend:**

React.js

React Router

Axios

**Backend:**

Node.js

Express.js

REST API

Database:
MySQL (SQL Server for production)

**Project Structure**

language-learning-portal/
├── backend/               # Backend code
│   ├── routes/            # API routes
│   ├── models/            # Database models
│   ├── controllers/       # Business logic
│   ├── utils/             # Utility functions (e.g., email, token generation)
│   ├── .env               # Environment variables
│   └── server.js          # Backend entry point
├── frontend/              # Frontend code
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── pages/         # Page components
│   │   ├── App.js         # React app entry
│   │   └── index.js       # Main entry file
│   └── public/
├── README.md              # Documentation
└── package.json           # Dependencies
**Getting Started
Prerequisites**

Node.js (v16+)

MySQL Server

npm or yarn

Setup

Clone the repository:

git clone https://github.com/Swati-Tarafdar-code/Swati_2023tm93538_FSA.git

cd language-learning-portal

Backend Configuration:

Navigate to the backend directory:

cd backend

**Install dependencies:**

npm install

PORT=5000

DB_HOST=localhost

DB_USER=root

DB_PASS=password

DB_NAME=LanguageLearningDB

Start the backend server:

npm start

Frontend Configuration:

Navigate to the frontend directory:

cd ../frontend

Install dependencies:

npm install

export const API_BASE_URL = "http://localhost:5000";

Start the development server:

npm start

Access the application at http://localhost:3000.


**Usage**
Register as a new user to explore available courses.
Login to track your progress and take quizzes.

**Scripts**

Start the backend: npm start (in /backend)

Start the frontend: npm start (in /frontend)
