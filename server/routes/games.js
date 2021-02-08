const Router = require("express").Router;
const router = new Router();
// const Game = require("../models/game");
const ExpressError = require("../expressError");
const pool = require("../db");
const { validate } = require("jsonschema");
const gameNewSchema = require("../schemas/gameNewSchema.json");

router.post("/", async (req, res, next) => {
  try {
    const validation = validate(req.body, gameNewSchema);

    if (!validation.valid) {
      throw new ExpressError(
        validation.errors.map((e) => e.stack),
        400,
      );
    }
    const { game_name } = req.body;
    const result = await pool.query(
      "INSERT INTO games (game_name) VALUES ($1) returning *",
      [game_name],
    );
    res.json(result.rows[0]);
  } catch (err) {
    return next(err);
  }
});
router.get("/", async (req, res, next) => {
  try {
    const result = await pool.query("SELECT * FROM games");
    res.json(result.rows);
  } catch (err) {
    return next(err);
  }
});
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM games WHERE id = $1", [id]);
    console.log(id);
    res.json(result.rows[0]);
  } catch (err) {
    return next(err);
  }
});
router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const { game_name } = req.body;
    const result = await pool.query(
      "UPDATE games SET game_name= $1 WHERE id=$2 returning *",
      [game_name, id],
    );
    console.log(id);
    res.json(result.rows[0]);
  } catch (err) {
    return next(err);
  }
});
router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await pool.query("DELETE FROM games WHERE id = $1", [id]);
    console.log(id);
    res.json("The game was deleted.");
  } catch (err) {
    return next(err);
  }
});
module.exports = router;
