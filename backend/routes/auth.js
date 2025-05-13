// backend/routes/auth.js
const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/signup', (req, res) => {
  const { username, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    return res.json({ success: false, message: "Passwords do not match" });
  }

  db.query("SELECT * FROM users WHERE username = ?", [username], (err, result) => {
    if (result.length > 0) {
      return res.json({ success: false, message: "Username already exists" });
    }

    db.query("INSERT INTO users (username, password) VALUES (?, ?)", [username, password], (err, result) => {
      if (err) throw err;
      res.json({ success: true, message: "User registered" });
    });
  });
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  db.query("SELECT * FROM users WHERE username = ? AND password = ?", [username, password], (err, result) => {
    if (result.length > 0) {
      res.json({ success: true, message: "Login successful" });
    } else {
      res.json({ success: false, message: "Invalid credentials" });
    }
  });
});

module.exports = router;
