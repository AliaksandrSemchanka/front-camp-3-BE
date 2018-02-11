const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');

module.exports = (passport) => {
    passport.use('signup', new LocalStrategy({passReqToCallback : true}, (req,username, password, done) => {
        User.findOne({ username: username }, (err, user) => {

            if (err) {
                return done(err);
            }

            if (user) {
                return done(null, false, {'message': 'User already exis'});
            } else {
                User.create({ username: username, email: req.param('email'), password: password }, (err, user) => {

                    if(err) {
                        throw err
                    }
                    return done(null, user);
                });
            }
        })
    }))
};