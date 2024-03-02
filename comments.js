// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Use body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Create a comments array
const comments = [
  { id: 1, author: 'John', content: 'First comment!' },
  { id: 2, author: 'Alice', content: 'Second comment!' },
  { id: 3, author: 'Bob', content: 'Third' }]
