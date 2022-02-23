const schema = require("mongoose").Schema;
const mongoose = require("mongoose");

//normal user
// const user = mongoose.Schema({
//   email: {},
//   password: {},
//   name: {},
// })

//blog user
const user = new schema({
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  name: String,
  blogs: [String],
  followers: {
    type: Number,
    default: 0,
  },
  likes: {
    type: Number,
    default: 0,
  },
  joined: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("users", user);
