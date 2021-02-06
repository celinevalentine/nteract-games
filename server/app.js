const express = require("express");
const cors = require("cors");

const ExpressError = require("./expressError");
const app = express();

app.use(cors());
app.use(express.json());

// routes

const userRoutes = require("./routes/users");
const gameRoutes = require("./routes/games");
const taskRoutes = require("./routes/tasks");
const imageRoutes = require("./routes/images");
const hotspotRoutes = require("./routes/hotspots");

// 404 handler
app.use(function (req, res, next) {
  const err = new ExpressError("Not Found", 404);
  return next(err);
});

//general error handler
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  if (process.env.NODE_ENV != test) console.error(err.stack);

  return res.json({
    error: err,
    message: err.message,
  });
});

module.exports = app;
