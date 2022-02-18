const mongoose = require("mongoose");

sessions = mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  expires: { type: Date, expires: 3600 },
});

module.exports = { sessions };
