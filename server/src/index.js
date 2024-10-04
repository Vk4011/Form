// index.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./config/db');
const dotenv = require('dotenv');
dotenv.config();

const routes = require('./routes/router');

const app = express();
const port = process.env.PORT || 3000;


// Middleware
app.use(cors());
app.use(bodyParser.json());

// Serve static files from the "public" directory
app.use(express.static('public'));

// Remove the serving of uploaded files
// app.use('/uploads', express.static('uploads'));

app.use('/api', routes);

app.get('/', (req, res) => {
  res.json({ msg: 'Welcome to the form submission API' });
});

app.listen(port, () => {
  console.log(`\n\t Server running on http://localhost:${port} \n`);
  db(); // Call the database connection function
});
