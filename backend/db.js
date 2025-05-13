// backend/db.js
const mysql = require('mysql');
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',       // Default XAMPP password is empty
  database: 'user_auth'
});
db.connect((err) => {
  if (err) throw err;
  console.log('MySQL Connected');
});
module.exports = db;
