`use strict`;

// Load the Express dependency
const express = require('express');

// Instantiate the Express dependency
const app = express();

// Set a port
const PORT = 4000;

// Tell Express where to serve files from
// To do this, we use Express's built-in middleware
app.use(express.static('./public'));

// Add a route called 'doggo' to serve demi.html from public/
app.get('/doggo', (request, response) => {
  console.log('We got a request at /doggo and will send back to the browser the file demi.html');
  response.sendFile('public/demi.html', { root: '.' });
});

// Let's make a weasels route!
app.get('/weasels', (request, response) => {
  console.log('Weasels!!!!!');
  response.send('<h1>OMG the weasels are ripping my flesh!!!!</h1><h2>Damn weasels.</h2><img src="https://cabalinkabul.files.wordpress.com/2013/02/image15.jpg" />');
});

// Middleware for the POST route
app.use(express.urlencoded({ extended: true }));

app.post('/weasels', (request, response) => {
  console.log('This is what was sent from the browser', request.body)
  response.send('This is the server ackowledging that it received a POST from the browser');
});

// Let's add a handler that will catch anything not caught by a prior route
// This will then dispatch the 404 status and 404.html
app.use((request, response, next) => {
  console.log('OH NOES a 404!!!!!');
  response.status(404).sendFile('404.html', { root: './public' });
});

// Tell Express to listen
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));