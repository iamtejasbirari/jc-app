import express from 'express';
import cors from 'cors';

const app = express();
const port = 5000;

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
app.get('/', (req, res) => {
  res.send('IM BACK');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
