const mongoose = require('mongoose');

module.exports = mongoose.model('User', {
  username: {
    type: String,
    required: true,
  },
  password: {
    required: true,
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
});
