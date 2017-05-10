var db = require("../models");


module.exports = function(app) {
  app.get("/", function(req, res) {
    db.Burger.findAll({}).then(function(dbburgers) {
      res.render("index", {
        burgers: dbburgers
      });
    });
  });
  app.post("/burgers/create", function(req, res) {
    db.Burger.create({
      burger_name: req.body.name,
      devoured: false
    }).then(function() {
      res.redirect("/");
    });
  });
  app.put("/burgers/update/devour/:id", function(req, res) {
    db.Burger.update({
      devoured: true
    }, {
      where: {
        id: req.params.id
      }
    }).then(function(dbburgers) {
      res.redirect("/");
    });
  });
  app.delete("/burgers/delete/:id", function(req, res) {
    db.Burger.destroy({
      where: {
        id: req.params.id
      }
    }).then(function() {
      res.redirect("/");
    });
  });

};
