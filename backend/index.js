const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('Hello from backend!')
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
