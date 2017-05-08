var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var db = require("../models/");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  db.Burger.findAll().then(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  db.Burger.create(req.body).then(function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  db.Burger.update({
      devoured: req.body.devoured
    },
      {
        where: {
          id: req.params.id
        }
      }).then(function(dbBurger) {
        res.redirect("/");
      });
});

// Export routes for server.js to use.
module.exports = router;