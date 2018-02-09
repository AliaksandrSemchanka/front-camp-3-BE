const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const blogScheme = new Schema(
    { author: String,
      text: String,
    },
    { versionKey: false }
);

const Blogs = mongoose.model('Blogs', blogScheme);

module.exports = Blogs;
