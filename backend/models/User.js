const mongoose = require("mongoose");

const { Schema } = mongoose;

const UserSchema = new Schema({
  name: String,
  username: String,
  googleId: String,
  githubProfile: String,
  mobileNumber: String,
  completedCourses: { type: Object, default: { NULL: true } },
  completedQuestions: { type: Object, default: { NULL: true } },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
