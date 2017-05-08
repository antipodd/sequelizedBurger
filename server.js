//Dependencies
//Require express
var express = require("express");
//Require body-parser
var bodyParser = require("body-parser");
//Require method-override
var methodOverride = require("method-override");
//Require express-handlebars
var exphbs = require("express-handlebars");

var port = process.env.PORT || 3000;

var app = express();


// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=PUT
app.use(methodOverride("_method"));

// Set Handlebars.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

// Requiring our models for syncing
var db = require("./models");

// Syncing our sequelize models and then starting our express app
db.sequelize.sync({ force: false }).then(function() {
  app.listen(port, function() {
    console.log("App listening on PORT " + port);
  });
});





