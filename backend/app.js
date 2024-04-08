const express = require("express");
require("dotenv").config();

const cookieSession = require("cookie-session");
require("./auth/passportGoogleSSO");
require("./auth/passportGithubSSO");
const middlewares = require("./middlewares");
const loginWithGoogle = require("./api/loginWithGoogle");
const loginWithGithub = require("./api/loginWithGithub");
const userRoute = require("./api/user");
const passport = require("passport");

const app = express();

const cors = require("cors");
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_KEY],
  })
);
// Define a route

app.get("/", (req, res) => {
  res.send("Hello, World!");
});
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.json({
    message: "🦄🌈✨👋🌎🌍🌏✨🌈🦄",
  });
});
app.post("/logout", function (req, res, next) {
  console.log("HERE1234");
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
  res.json("Logged Out Successfully!");
});
//For every new database we make
const userDataRouter = require("./controllers/UserData");
const quizDataRouter = require("./controllers/QuizData");
const courseDataRouter = require("./controllers/CourseData");
app.use("/api/v1", courseDataRouter);
app.use("/api/v1", quizDataRouter);
app.use("/api/v1", userDataRouter);

app.use("/api/v1", loginWithGoogle);
app.use("/api/v1", loginWithGithub);
app.use("/api/v1", userRoute);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

//MONGO DB CONNECT
const connectDB = require("./db/connect");

// Start the server
const port = 4000;
connectDB(process.env.MONGO_URL);
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
