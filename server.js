var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

// var routes = require('./app/routes.js');
// app.use('/data/', routes);

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/public')));


app.get('/', function(req, res)
{
  res.sendFile(path.join(__dirname, '/public', '/index.html'));
});

var port = process.env.PORT || 3000;

app.listen(port);
console.log("Server is starting on port 3000")
