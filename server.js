const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());

// Serve the HTML file as a static resource
app.use(express.static('public'));

// Endpoint to fetch JSON data
app.get('/data', (req, res) => {
  fs.readFile('data.json', 'utf-8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading data file');
      return;
    }

    res.json(JSON.parse(data));
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});