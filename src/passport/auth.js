const LocalStrategy = require('passport-local').Strategy;
const bCrypt = require('bcrypt-nodejs');

const User = require('../models/user');

module.exports = (passport) => {
  const checkPassword = (password, user) => bCrypt.compareSync(password, user.password);
  passport.use('auth', new LocalStrategy({ passReqToCallback: true }, (req, username, password, done) => {
    User.findOne({ username }, (err, user) => {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, req.flash('message', 'User Not found'));
      }
      if (!checkPassword(password, user)) {
        return done(null, false, req.flash('message', 'Invalid Password'));
      }
      return done(null, user);
    });
  }));
};
