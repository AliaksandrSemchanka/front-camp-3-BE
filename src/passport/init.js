const auth = require('./auth');
const signup = require('./signup');
const User = require('../models/user');

module.exports = (passport) => {
  passport.serializeUser((user, done) => {
    const { _id: id } = user;
    done(null, id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });

  auth(passport);
  signup(passport);
};
