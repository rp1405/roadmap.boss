const express = require("express");
const { isUserAuthenticated } = require("../middlewares/auth");

const router = express.Router();

router.get("/auth/user", isUserAuthenticated, (req, res) => {
  console.log("auth/user");
  res.json(req.user);
});

module.exports = router;
