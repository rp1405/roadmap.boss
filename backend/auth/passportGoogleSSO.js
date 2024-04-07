const passport = require("passport");
const GoogleStrategy = require("passport-google-oidc").Strategy;

const User = require("../models/User");

const GOOGLE_CALLBACK_URL = `${process.env.THIS_URL}/api/v1/auth/google/callback`;

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: GOOGLE_CALLBACK_URL,
      passReqToCallback: true,
    },
    async (cb, issuer, profile) => {
      const userDetails = {
        name: profile.displayName,
        googleId: profile.emails[0].value,
        username: profile.emails[0].value.split("@")[0],
      };

      const user = await User.findOneAndUpdate(
        { username: userDetails.username }, // Define the query criteria
        { $setOnInsert: userDetails }, // Set defaults if document is inserted
        { upsert: true, new: true } // Create new document if not found, return the updated document
      ).catch((err) => {
        console.log("Error signing up", err);
        cb(err, null);
      });
      console.log(user);
      if (user && user[0]) return cb(null, user && user[0]);
    }
  )
);

passport.serializeUser((user, cb) => {
  console.log("Serializing user:", user);
  cb(null, user._id);
});

passport.deserializeUser(async (id, cb) => {
  console.log(id);
  const user = await User.findById(id).catch((err) => {
    console.log("Error deserializing", err);
    cb(err, null);
  });

  console.log("DeSerialized user", user);

  if (user) cb(null, user);
});
