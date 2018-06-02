var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var http = require('http');

// Object created for using express
var app = express();

// Path to other APIs code
var api = require('./server/api');

// set body-parser as a middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// path to the dist folder, that was created using 'ng build' to
// connect the Angular front-end to node back-end
app.use(express.static(path.join(__dirname, 'dist/nodejsDemo')));

// Default api
app.use('/', api);

// path to the 'index.html' file inside dist/nodejsDemo folder
// this is the landing page of the web-app
app.get('/ping', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/nodejsDemo/index.html'));
});

var port = process.env.PORT || 3000;
app.set('port', port);

var server = http.createServer(app);
server.listen(port, () => console.log(`Server is listening on port ${port}`));