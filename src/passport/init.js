const auth = require('./auth');
const signup = require('./signup');
const User = require('../models/user');

module.exports = (passport) => {
    passport.serializeUser(function(user, done) {
        done(null, user._id);
    });

    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });

    auth(passport);
    signup(passport);

}