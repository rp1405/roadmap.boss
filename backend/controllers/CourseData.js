const express = require("express");
const router = express.Router();
const Course = require("../models/Course");

// Import the CourseRepo if you're using one for database operations

// GET course by ID
router.get("/getCourse", async (req, res) => {
  try {
    const course = await Course.findById(req.query.id);
    res.json(course);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST add new course
router.post("/addNewCourse", async (req, res) => {
  try {
    const course = new Course({
      name: req.body.name,
      topics: req.body.topics,
    });
    const newCourse = await course.save();
    res.status(201).json(newCourse);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PATCH update course
router.patch("/updateCourse", async (req, res) => {
  try {
    const updatedCourse = await Course.findByIdAndUpdate(
      req.body.id,
      req.body,
      { new: true }
    );
    res.json(updatedCourse);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PATCH add new topic or update existing topic
router.patch("/addNewTopic", async (req, res) => {
  try {
    const course = await Course.findById(req.query.id);
    course.topics.set(req.body.name, req.body);
    const updatedCourse = await course.save();
    res.json(updatedCourse);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PATCH delete topic
router.patch("/deleteTopic", async (req, res) => {
  try {
    const course = await Course.findById(req.query.id);
    course.topics.delete(req.body);
    const updatedCourse = await course.save();
    res.json(updatedCourse);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PATCH add new subtopic
router.patch("/addNewSubtopic", async (req, res) => {
  try {
    const course = await Course.findById(req.query.id);
    course.topics
      .get(req.body.topicName)
      .subtopics.set(req.body.subtopic.name, req.body.subtopic);
    const updatedCourse = await course.save();
    res.json(updatedCourse);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PATCH delete subtopic
router.patch("/deleteSubtopic", async (req, res) => {
  try {
    const course = await Course.findById(req.query.id);
    course.topics
      .get(req.body.topicName)
      .subtopics.delete(req.body.subtopicName);
    const updatedCourse = await course.save();
    res.json(updatedCourse);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
