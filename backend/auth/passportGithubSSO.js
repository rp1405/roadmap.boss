const passport = require("passport");
const GitHubStrategy = require("passport-github").Strategy; // Import GitHubStrategy
const User = require("../models/User");

const GITHUB_CALLBACK_URL = "http://localhost:4000/api/v1/auth/github/callback";

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: GITHUB_CALLBACK_URL,
      passReqToCallback: true,
    },
    async (req, accessToken, refreshToken, profile, cb) => {
      console.log(profile);
      const userDetails = {
        name: profile.displayName,
        username: profile.username,
        githubProfile: profile.html_url,
      };

      try {
        const user = await User.findOneAndUpdate(
          { username: userDetails.username }, // Define the query criteria
          { $setOnInsert: userDetails }, // Set defaults if document is inserted
          { upsert: true, new: true } // Create new document if not found, return the updated document
        );
        console.log(user);
        if (user) {
          return cb(null, user);
        } else {
          return cb(new Error("User not found"), null);
        }
      } catch (err) {
        console.log("Error signing up", err);
        return cb(err, null);
      }
    }
  )
);

passport.serializeUser((user, cb) => {
  console.log("Serializing user:", user);
  cb(null, user._id);
});

passport.deserializeUser(async (id, cb) => {
  try {
    const user = await User.findById(id);
    console.log("DeSerialized user", user);
    if (user) {
      cb(null, user);
    } else {
      cb(new Error("User not found"), null);
    }
  } catch (err) {
    console.log("Error deserializing", err);
    cb(err, null);
  }
});
