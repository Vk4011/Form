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
app.use(cors()); // Enable CORS for all origins
app.use(bodyParser.json()); // Parse incoming JSON data

// Serve static files from the "public" directory
app.use(express.static('public'));

app.use(express.json());
app.use('/api', routes);


app.get('/', (req, res) => {
  res.json({msg:'Welcome to the form submission API'});
});
// Start the server and connect to the database
app.listen(port, () => {
  console.log(`\n\t Server running on http://localhost:${port} \n`);
  db(); // Call the database connection function
});
