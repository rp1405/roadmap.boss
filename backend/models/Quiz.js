const mongoose = require("mongoose");

const { Schema } = mongoose;

const QuizSchema = new Schema({
  name: String,
  questions: [
    {
      question: String,
      answer: String,
    },
  ],
});

const Quiz = mongoose.model("Quiz", QuizSchema);

module.exports = Quiz;
