const User = require("../models/users.js");

module.exports = function(app) {
    app.route("/")
        .get(function(req, res){
            res.render("login");
        });

    app.route("/login")
        .get(function(req, res){
            res.render("login");
        });

    app.route("/register")
        .get(function(req, res) {
            res.render("register");
        })
        .post(function(req, res) {
            var username = req.body.username;
            var email = req.body.email;
            var password = req.body.password;
            User.createNewUser(username, password, email, function(err, user) {
                if (err) {
                    res.send(err);
                } else {
                    res.json(user);
                }
            });
        });
};
