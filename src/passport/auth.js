const LocalStrategy = require('passport-local');
const User = require('../models/user');

module.exports = (passport) => {
    passport.use('auth', new LocalStrategy((req, username, password, done) => {
        User.findOne({ username: username })
            .then(user => {
                return !user ? done(null, false, req.flash('message', 'User Not found')) : user;
            })
            .then(user => user.password !== password ? done(null, false, req.flash('message', 'Incorrect password')) : done(null, user))
            .catch(err => done(err))
    }))
};
