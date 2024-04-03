const express = require("express");
const router = express.Router();
const User = require("../models/User");
const mongoose = require("mongoose");
// GET user data by ID
router.get("/getUserById", async (req, res) => {
  try {
    const user = await User.findById(req.query.id);
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST add new user
router.post("/addNewUser", async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get("/getUserByEmail", async (req, res) => {
  try {
    const email = req.query.email; // Get the email address from the query parameters
    console.log(email);
    const user = await User.findOne({ email }); // Search for the user by email address
    if (!user) {
      // If user not found, return 404
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user); // Return the user if found
  } catch (err) {
    // Handle errors
    res.status(500).json({ message: err.message });
  }
});
// PATCH update user
router.patch("/updateUser", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.body._id, req.body, {
      new: true,
    });
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PATCH add completed subtopic
router.patch("/addCompletedSubtopic", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.body._id,
      {
        $set: {
          [`completedCourses.${req.body.completedSubtopic}`]: true,
        },
      },
      { new: true }
    );
    const updatedUser = await user.save();
    console.log(updatedUser);
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
router.patch("/deleteCompletedSubtopic", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.body._id,
      {
        $set: {
          [`completedCourses.${req.body.subtopicToDelete}`]: false,
        },
      },
      { new: true }
    );
    const updatedUser = await user.save();
    console.log(updatedUser);
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
// PATCH add completed question
router.patch("/deleteCompletedQuestion", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.body._id,
      {
        $set: {
          [`completedQuestions.${req.body.completedQuestion}`]: false,
        },
      },
      { new: true }
    );
    const updatedUser = await user.save();
    console.log(updatedUser);
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
router.patch("/addCompletedQuestion", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.body._id,
      {
        $set: {
          [`completedQuestions.${req.body.completedQuestion}`]: true,
        },
      },
      { new: true }
    );
    const updatedUser = await user.save();
    console.log(updatedUser);
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
