const express = require("express");
const router = express.Router();
const Quiz = require("../models/Quiz");

// GET quiz data by ID
router.get("/getQuiz", async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.query.id);
    res.json(quiz);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST add new quiz
router.post("/addNewQuiz", async (req, res) => {
  try {
    const quiz = await Quiz.save(req.body);
    res.json(quiz);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// PATCH update quiz
router.patch("/updateQuiz", async (req, res) => {
  try {
    const quiz = await Quiz.save(req.body);
    res.json(quiz);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// PATCH add new question
router.patch("/addNewQuestion", async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.query.id);
    quiz.questions.push(req.body);
    const updatedQuiz = await Quiz.save(quiz);
    res.json(updatedQuiz);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// PATCH delete question
router.patch("/deleteQuestion", async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.query.id);
    quiz.questions.splice(req.body.questionNo - 1, 1);
    const updatedQuiz = await Quiz.save(quiz);
    res.json(updatedQuiz);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// PATCH update question
router.patch("/updateQuestion", async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.query.id);
    quiz.questions[req.body.questionNo - 1] = req.body.question;
    const updatedQuiz = await Quiz.save(quiz);
    res.json(updatedQuiz);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
