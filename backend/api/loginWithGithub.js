const express = require("express");
const passport = require("passport");
const { isUserAuthenticated } = require("../middlewares/auth");

const router = express.Router();

const successLoginUrl = `${process.env.FRONTEND_URL}/login/success`;
const errorLoginUrl = `${process.env.FRONTEND_URL}/login/error`;

router.get(
  "/login/github",
  passport.authenticate("github", { scope: ["profile", "email"] })
);

router.get(
  "/auth/github/callback",
  passport.authenticate("github", {
    failureMessage: "Cannot login to Github, please try again later!",
    failureRedirect: errorLoginUrl,
    successRedirect: successLoginUrl,
  }),
  (req, res) => {
    console.log("User: ", req.user);
    res.send("Thank you for signing in!");
  }
);

module.exports = router;
