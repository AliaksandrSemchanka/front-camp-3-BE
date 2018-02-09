const LocalStrategy = require('passport-local');
const User = require('../models/user');

module.exports = (passport) => {
    passport.use('signup', new LocalStrategy((req, username, password, done) => {
        User.findOne({ username: username })
            .then(user => user ? done(null, false, req.flash('message', 'User already exist')) : User.create({
                username: username,
                password: password,
            }))
            .then(user => done(null, user))
            .catch(err => done(err))
    }))
};