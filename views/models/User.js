const mongoose = require("mongoose");

userSchema = new mongoose.Schema({
  googleId: {
    type: String,
    unique: true,
    required: true
  }
});

mongoose.model("users", userSchema);
