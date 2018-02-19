const LocalStrategy = require('passport-local').Strategy;
const bCrypt = require('bcrypt-nodejs');

const User = require('../models/user');

module.exports = (passport) => {
  const createHash = password => bCrypt.hashSync(password);
  passport.use('signup', new LocalStrategy({ passReqToCallback: true }, (req, username, password, done) => {
    User.findOne({ username }, (err, user) => {
      if (err) {
        return done(err);
      }
      if (user) {
        return done(null, false, req.flash('message', 'User already exist'));
      }
      const a = createHash(password);
      const createdUser = {
        username,
        email: req.param('email'),
        password: a,
      };
      User.create(createdUser, (error, data) => {
        if (error) {
          throw error;
        }
        return done(null, data);
      });
      return true;
    });
  }));
};
