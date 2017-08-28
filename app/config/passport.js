const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/users.js");

module.exports = function(passport) {
    passport.use(new LocalStrategy(
        function(username, password, done) {
            User.findOne({ username: username }, function (err, user) {
                if (err) { return done(err); }
                if (!user) {
                    return done(null, false, { message: "Incorrect username." });
                }
                if (!user.validPassword(password)) {
                    return done(null, false, { message: "Incorrect password." });
                }
                return done(null, user);
            });
        }
    ));
};
