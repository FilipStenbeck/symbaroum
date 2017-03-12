require('dotenv').config()
const express = require('express')
const contentful = require('contentful')
const path = require('path')
const compression = require('compression')
const { SPACE_ID, ACCESS_TOKEN } = require('./config');

const app = express()

console.log(SPACE_ID, ACCESS_TOKEN);
const client = contentful.createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN
})


// serve our static stuff like index.css
app.use(express.static(path.join(__dirname, 'public')))


// send all requests to index.html so browserHistory in React Router works
app.get('/api/welcome', function (req, res) {
   res.json({ message: 'hooray! welcome to our api!' });
})

// send all requests to index.html so browserHistory in React Router works
app.get('/api/contentfultest', function (req, res) {

    client.getEntries()
      .then((response) => {
        res.json(response.items[0].fields.portrait);
      })
      .catch((error) => {
        res.send(error);
      })
})

//send all requests to index.html so browserHistory in React Router works
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

var PORT = process.env.PORT || 8080
app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT)
})
