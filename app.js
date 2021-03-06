const express = require("express");
const cors = require("cors");
const path = require("path");
const ExpressError = require("./ExpressError");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
}

// routes

// const userRoutes = require("./routes/users")
const gameRoutes = require("./routes/games");
const taskRoutes = require("./routes/tasks");
const hotspotRoutes = require("./routes/hotspots");

// app.use("/api/v1/users", userRoutes);
app.use("/api/v1/games", gameRoutes);
app.use("/api/v1/tasks", taskRoutes);
app.use("/api/v1/hotspots", hotspotRoutes);

// 404 handler
app.use(function (req, res, next) {
  const err = new ExpressError("Not Found", 404);
  return next(err);
});

//general error handler
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  if (process.env.NODE_ENV != "test") console.error(err.stack);

  return res.json({
    error: err,
    message: err.message,
  });
});

module.exports = app;
