require('./config/mongoose.js');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

// static content
app.use(express.static(path.join(__dirname, './client')));

// set-up body parser 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// require routes.js
var routes = require('./config/routes.js')(app);

var port = process.env.PORT || CONFIG.port;

// set port
var server = app.listen(port, function() {
	console.log("App successfully connected!");
});