const LocalStrategy = require('passport-local').Strategy;
const bCrypt = require('bcrypt-nodejs');

const User = require('../models/user');

module.exports = (passport) => {
    passport.use('signup', new LocalStrategy({passReqToCallback : true}, (req,username, password, done) => {
        User.findOne({ username: username }, (err, user) => {
            if (err) {
                return done(err);
            }
            if (user) {
                return done(null, false, req.flash('message', 'User already exist'));
            } else {
                const a =  createHash(password);
                const createdUser = {
                    username: username,
                    email: req.param('email'),
                    password: a,
                };
                User.create(createdUser, (err, user) => {
                    if(err) {
                        throw err
                    }
                    return done(null, user);
                });
            }
        })
    }));

    const createHash = (password) => bCrypt.hashSync(password);
};