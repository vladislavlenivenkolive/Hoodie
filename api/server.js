const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

app.get('/api/entities', (req, res) => {
  res.json([
    { name: 'Entity One' },
    { name: 'Entity Two' },
    { name: 'Entity Three' }
  ]);
});

app.listen(port, () => {
  console.log(`Mock API server running at http://localhost:${port}`);
});
