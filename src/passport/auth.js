const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');

module.exports = (passport) => {
    passport.use('auth', new LocalStrategy({ passReqToCallback: true }, (req, username, password, done) => {
        User.findOne({ username: username }, (err, user) => {
            if (err)
                return done(err);
            if (!user){
                return done(null, false, req.flash('message', 'User Not found'));
                }
            if (user.password !== password){
                return done(null, false, req.flash('message', 'Invalid Password'));
            }
            return done(null, user);
        })
    }))
};
