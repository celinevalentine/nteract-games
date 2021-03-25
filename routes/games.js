const Router = require("express").Router;
const router = new Router();
const ExpressError = require("../expressError");
const Game = require("../models/Game");
const { validate } = require("jsonschema");
const gameNewSchema = require("../schemas/gameNewSchema.json");
const checkJwt = require("../middleware/auth");

router.post("/", checkJwt, async (req, res, next) => {
  try {
    const validation = validate(req.body, gameNewSchema);

    if (!validation.valid) {
      throw new ExpressError(
        validation.errors.map((e) => e.stack),
        400,
      );
    }
    const game = await Game.create(req.body);
    return res.status(201).json(game);
  } catch (err) {
    return next(err);
  }
});
router.get("/", checkJwt, async (req, res, next) => {
  try {
    const games = await Game.findAll(req.query);
    res.json(games);
  } catch (err) {
    return next(err);
  }
});
router.get("/:id", checkJwt, async (req, res, next) => {
  try {
    const game = await Game.findOne(req.params.id);
    res.json(game);
  } catch (err) {
    return next(err);
  }
});
router.put("/:id", checkJwt, async (req, res, next) => {
  try {
    if ("id" in req.body) {
      throw new ExpressError("You are not allowed to change the ID", 400);
    }
    const validation = validate(req.body, gameNewSchema);
    if (!validation.valid) {
      throw new ExpressError(
        validation.errors.map((e) => e.stack),
        400,
      );
    }
    const game = await Game.update(req.params.id, req.body);
    return res.json(game);
  } catch (err) {
    return next(err);
  }
});
router.delete("/:id", checkJwt, async (req, res, next) => {
  try {
    const { id } = req.params;
    await Game.remove(id);
    res.json({ message: "The game was deleted." });
  } catch (err) {
    return next(err);
  }
});
module.exports = router;
