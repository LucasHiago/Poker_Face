const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const Port = 4444;

// Creates a server
const App = express();

// Ensures parsing 
App.use(bodyParser.json());
App.use(bodyParser.urlencoded({extended: true}));

// Serves static files from this path
App.use(express.static(path.join(__dirname, '../static')));

// Starts the server
App.listen(Port, (err) => {
  if (err) console.log('There was an error while starting the server:', err);
  console.log('Server is running on port', Port)
});