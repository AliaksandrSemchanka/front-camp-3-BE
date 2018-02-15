const mongoose = require('mongoose');

const { Schema } = mongoose;
const blogScheme = new Schema(
  {
    author: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  { versionKey: false },
);

const Blogs = mongoose.model('Blogs', blogScheme);

module.exports = Blogs;
