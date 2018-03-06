// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var methodoverride = require('method-override');
var bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================
var app = express();
var port = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Static directory
app.use(express.static("public"));

// Handlebars

// app.engine('handlebars', exphbs({defaultLayout: 'main'}));
// app.set('view engine', 'handlebars');


// var router = require('./controllers/burger-controllers.js');
// app.use('/', router);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() { //default is true but this overwrite existing tables
  app.listen(port, function() {
    console.log("App listening on PORT " + port);
  });
});
