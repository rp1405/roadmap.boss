const mongoose = require("mongoose");

const { Schema } = mongoose;

// const SubtopicSchema = {
//   name: String,
//   content: String,
// };

// const TopicSchema = {
//   name: String,
//   subtopics: {
//     type: Object,
//     default: {},
//   },
// };

const CourseSchema = new Schema({
  name: String,
  topics: {
    type: Object,
    default: {},
  },
});

const Course = mongoose.model("Course", CourseSchema);

module.exports = Course;
