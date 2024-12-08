const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const dotenv = require('dotenv');

const app = express();
dotenv.config();
const port = 5000;

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
})

// Promisify queries for ease of use
const db = pool.promise();

// Static array for todos
const todos = [
  { id: 1, text: 'Learn Docker' },
  { id: 2, text: 'Build a MERN app' },
  { id: 3, text: 'Deploy on Kubernetes' }
];

// Middleware
app.use(express.json()); // To parse JSON bodies
app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  })
); // Enable Cross-Origin Resource Sharing (CORS)

// Get all todos
app.get('/api/todos', (req, res) => {
  res.json(todos);
});

// Root endpoint
app.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SHOW DATABASES');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch DATABASES' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
