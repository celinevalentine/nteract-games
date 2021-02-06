const Router = require("express").Router;
const router = new Router();
const Game = require("../models/game");
const ExpressError = require("../expressError");

router.get("/", async (req, res, next) => {
  try {
    let games = await Game.findAll();
    return res.json({ games });
  } catch (e) {
    return next(e);
  }
});
