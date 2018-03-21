`use strict`;

// Load Express
const express = require('express');

// Instantiate Express so that we can use its functionality
const app = express();

// Designate a port to serve our app on
const PORT = process.env.PORT || 3000;

// Define which directory we will serve files from
app.use(express.static('./public'));

// Here is one way to set up a route... bats...
app.get('/doggo', (request, response) => {
  console.log('Demi! via console.log from server.js');
  response.sendFile('public/demi.html', { root: '.' });
})

// Here is our sneaky secret 'weasels' route...
app.get('/weasels', (request, response) => {
  console.log('Weasels!!!!');
  response.send('OMG the weasels route has been activated... RUN FOR YOUR LIVES!!!!')
})

// What about other methods? Can we make a POST?
// To do so we will need to instantiate a NPM utility called 'body-parser' that is automatically installed as a dependency of Express

const bodyParser = require('body-parser').urlencoded({ extended: true });

// How will we send a POST request to this route? $.post

app.post('/weasels', bodyParser, (request, response) => {
  console.log(request.body);
  response.send('Data sent to the server!');
});

// Let's 404 everything except for our routes and index.html
app.use((request, response, next) => {
  console.log('OH NOES A 404!!!');
  response.status(404).sendFile('404.html', { root: './public' });
});

// Now let's tell the app to listen so that it can do its thing
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));