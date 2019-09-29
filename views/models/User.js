const mongoose = require("mongoose");

userSchema = new mongoose.Schema({
  googleId: {
    type: String,
    unique: true,
    required: true
  },
  credits: {
    type: Number,
    default: 0
  }
});

mongoose.model("users", userSchema);
