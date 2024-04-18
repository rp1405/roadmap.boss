const express = require("express");
require("dotenv").config();
const cookieSession = require("cookie-session");
const middlewares = require("./middlewares/middlewares");
const { isUserAuthenticated } = require("./middlewares/auth");
const app = express();

const cors = require("cors");
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use(express.json());
app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_KEY],
  })
);
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

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

const apiV1Router = express.Router();
apiV1Router.use(isUserAuthenticated);
app.use("/api/v1", apiV1Router);
//For every new database we make
const userDataRouter = require("./controllers/UserData");
const quizDataRouter = require("./controllers/QuizData");
const courseDataRouter = require("./controllers/CourseData");
app.use("/api/v1", courseDataRouter);
app.use("/api/v1", quizDataRouter);
app.use("/api/v1", userDataRouter);

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
