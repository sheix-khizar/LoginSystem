// backend/index.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/', authRoutes);

app.listen(3001, () => {
  console.log('Server started on http://localhost:3001');
});
