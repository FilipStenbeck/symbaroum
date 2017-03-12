require('dotenv').config()
const express = require('express')
const contentful = require('contentful')
const path = require('path')
const compression = require('compression')
const { SPACE_ID, ACCESS_TOKEN } = require('./config');
const { getAllNpc } = require('./cms');
const app = express()

console.log(SPACE_ID, ACCESS_TOKEN);
const client = contentful.createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN
})

// serve our static stuff like index.css
app.use(express.static(path.join(__dirname, 'public')))

app.use(function(req, res, next) {
	res.setHeader('Content-Type', 'application/json; charset=utf-8');
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET');
	res.setHeader('Access-Control-Max-Age', '3600');
	res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	res.setHeader('Cache-Control', 'max-age=120');
    next();
});

// send all requests to index.html so browserHistory in React Router works
app.get('/api/welcome', function (req, res) {
   res.json({ message: 'hooray! welcome to our api!' });
})

// send all requests to index.html so browserHistory in React Router works
app.get('/api/npc', function (req, res) {

    getAllNpc().then((response) => {
        res.json(response);
    });

})

//send all requests to index.html so browserHistory in React Router works
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

var PORT = process.env.PORT || 8080
app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT)
})
