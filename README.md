# Notes Backend API

A simple and clean Notes Backend API built using Node.js, Express.js, MongoDB, and JWT Authentication.

This project includes:

- User Authentication
- Protected Routes
- Create Notes
- Get Notes
- Update Notes
- Delete Single Note
- Delete All Notes
- MVC Architecture
- Service Layer Structure

---

# Folder Structure

```bash
notes-server/
│
├── node_modules/
│
├── src/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   └── notes.controller.js
│   │
│   ├── middlewares/
│   │   ├── auth.middleware.js
│   │   └── error.middleware.js
│   │
│   ├── models/
│   │   ├── notes.model.js
│   │   └── users.model.js
│   │
│   ├── routes/
│   │   ├── auth.route.js
│   │   └── note.route.js
│   │
│   ├── services/
│   │   ├── auth.services.js
│   │   └── notes.services.js
│   │
│   ├── utils/
│   │
│   └── app.js
│
├── .env
├── .gitignore
├── package-lock.json
├── package.json
└── server.js
```

---

# Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt
- Nodemon

---

# Features

- User Register
- User Login
- JWT Authentication
- Protected Routes
- Create Notes
- Get User Notes
- Update Notes
- Delete Single Note
- Delete All Notes

---

# Clone the Project

```bash
git clone https://github.com/praful-koli/backend-with-ankur-auth.git
```

---

# Move into Project Folder

```bash
cd notes.server
```

---

# Install Dependencies

```bash
npm install
```

---

# Create Environment Variables

Create a `.env` file in the root folder.

Add the following variables:

```env
PORT=8000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

---

# MongoDB Setup

## MongoDB Atlas Setup

### Step 1

Create account on MongoDB Atlas.

### Step 2

Create a new cluster.

### Step 3

Click on **Connect**.

### Step 4

Choose **Drivers**.

### Step 5

Copy the MongoDB connection string.

Example:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/notesDB
```

### Step 6

Paste it inside `.env` file.

---

# Run the Server

## Development Mode

```bash
npm run dev
```

---

# Server Running

```bash
Server running on http://localhost:8000
```

---

# Base URL

```bash
http://localhost:8000/api
```

---

# Authentication Routes

## Register User

### Endpoint

```http
POST /api/auth/register
```

### Request Body

```json
{
  "name": "Praful",
  "email": "praful@gmail.com",
  "password": "123456"
}
```

---

## Login User

### Endpoint

```http
POST /api/auth/login
```

### Request Body

```json
{
  "email": "praful@gmail.com",
  "password": "123456"
}
```

---

# Notes Routes

> All notes routes are protected.
> Token is required .

Example:

```
Token : token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2YTE4MzQ2M2I0MmI1ODQ4MzdjZmUyNjQiLCJpYXQiOjE3Nzk5NzI0MzMsImV4cCI6MTc4MDA1ODgzM30.X7XacAk2LXjg86TCtTQBFjOLFNHVDEPOxWIfYp82Pi0 
```

---

## Create Note

### Endpoint

```http
POST /api/notes/create
```

### Request Body

```json
{
  "title": "My First Note",
  "description": "Learning Backend Development"
}
```

---

## Get All Notes

### Endpoint

```http
GET /api/notes/get-notes
```

---

## Update Note

### Endpoint

```http
PATCH /api/notes/update-notes/:id
```

### Request Body

```json
{
  "description": "Updated Description"
}
```

---

## Delete Note

### Endpoint

```http
DELETE /api/notes/delete/:id
```

---

## Delete All Notes

### Endpoint

```http
DELETE /api/notes/delete-all
```

---

# Authentication Middleware

Protected routes use:

```js
identifyUser
```

This middleware checks:

- JWT Token
- User Authentication
- Request Authorization

---

# Scripts

```json
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}
```

---

# API Testing Tools

You can test the API using:

- Postman
---

# Common Errors

## MongoDB Connection Error

Make sure:

- MongoDB URI is correct
- Internet connection is working
- Database user has access

---

## JWT Error

Make sure:

- Token is valid
- Token is not expired
- JWT_SECRET is correct

---

# Author

Praful Koli


