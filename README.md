
# 🔐 React + NodeJS + MySQL Login & Signup Project

This project demonstrates a simple and beginner-friendly Login and Signup system using:

- **Frontend**: ReactJS (Vite)
- **Backend**: NodeJS (Express)
- **Database**: MySQL (via phpMyAdmin and XAMPP)

---

## 📁 Folder Structure

```
project-login-signup/
│
├── backend/              # NodeJS + Express API
│   ├── db.js             # MySQL database connection
│   ├── index.js          # Main server file
│   └── routes/
│       └── auth.js       # Signup & Login routes
│
└── frontend/             # ReactJS frontend
    ├── src/
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── pages/
    │       ├── Login.jsx
    │       └── Signup.jsx
```

---

## 🔧 Setup Instructions

### ✅ Requirements

- Node.js installed
- MySQL running via XAMPP
- phpMyAdmin accessible at `http://localhost/phpmyadmin`

---

## 📦 Backend Setup (NodeJS + Express)

### 1. Navigate to the backend folder:

```bash
cd backend
npm install
```

### 2. Project Dependencies

```bash
npm install express mysql cors body-parser
```

### 3. File: `db.js`

```js
const mysql = require('mysql');
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'user_auth'
});
db.connect((err) => {
  if (err) throw err;
  console.log('MySQL Connected');
});
module.exports = db;
```

### 4. File: `routes/auth.js`

Handles user registration and login.

### 5. File: `index.js`

Starts the Express server at `http://localhost:3001`.

```bash
node index.js
```

---

## 🌐 Frontend Setup (React + Vite)

### 1. Navigate to the frontend folder:

```bash
cd frontend
npm install
```

### 2. Run the React App

```bash
npm run dev
```

React app runs at `http://localhost:5173`.

### 3. Pages

- `Signup.jsx`: Form with Username, Password, Confirm Password
- `Login.jsx`: Form with Username and Password
- `App.jsx`: Combines both pages

### 4. Axios is used to send API requests to backend:

Install:

```bash
npm install axios
```

---

## 🛢️ MySQL Database Setup (via XAMPP/phpMyAdmin)

1. Start **Apache** and **MySQL** in XAMPP.
2. Go to: `http://localhost/phpmyadmin`
3. Create a new database: `user_auth`
4. Run this SQL to create the users table:

```sql
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) UNIQUE,
  password VARCHAR(255)
);
```

---

## 🔄 Data Flow

1. User submits a form on the frontend (React)
2. Axios sends POST request to backend API (`/signup` or `/login`)
3. Backend (Express) receives request and queries MySQL
4. Response (success/failure) is sent back to frontend
5. User sees alert or welcome message based on result


---

## 🧪 API Endpoints

| Method | Endpoint     | Description                  |
|--------|--------------|------------------------------|
| POST   | `/signup`    | Register new user            |
| POST   | `/login`     | Authenticate existing user   |

---

## ✍️ Author

This project was developed as part of **Lab 07 - Project: Login Signup System** for learning full-stack basics.

---

## 📜 License

This project is for educational use only.
