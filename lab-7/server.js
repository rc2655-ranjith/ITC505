const express = require('express');
const logger = require('morgan');
const path = require('path');

const server = express();

// Middleware
server.use(express.urlencoded({ extended: true }));
server.use(logger('dev'));

// Routes
server.get('/do_a_random', (req, res) => {
  res.send(`Your number is: ${Math.floor(Math.random() * 100) + 1}`);
});

// Serve static files from "public"
const publicServedFilesPath = path.join(__dirname, 'public');
server.use(express.static(publicServedFilesPath));

// Mad Lib POST route
server.post('/ITC505/lab-7/index.html', (req, res) => {
  const { name, adjective, pluralNoun, verb, place } = req.body;

  if (!name || !adjective || !pluralNoun || !verb || !place) {
    res.send(`
      <h1>Submission Failed</h1>
      <p>Please fill out ALL fields</p>
      <a href="/ITC505/lab-7/index.html">Go Back to Form</a>
    `);
    return;
  }

  const madLib = `Once upon a time, ${name} went to ${place} and saw ${pluralNoun}. 
  Feeling ${adjective}, ${name} decided to ${verb} with them. 
  What an unforgettable day it was!`;

  res.send(`
    <h1>Submission Successful</h1>
    <p>${madLib}</p>
    <a href="/ITC505/lab-7/index.html">Go Back to Form</a>
  `);
});

// Server listening
let port = 80;
if (process.argv[2] === 'local') {
  port = 8080;
}
server.listen(port, () => console.log(`Ready on localhost:${port}!`));
