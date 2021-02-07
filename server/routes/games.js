const Router = require("express").Router;
const router = new Router();
// const Game = require("../models/game");
const ExpressError = require("../expressError");
const pool = require("../db");

// router.get("/", async (req, res, next) => {
//   try {
//     console.log("hi");
//     // const result = await db.query(`SELECT game_name FROM games`);
//     // return result.json({ games: result.rows });
//   } catch (e) {
//     return next(e);
//   }
// });

router.post("/", async (req, res, next) => {
  try {
    const { game_name } = req.body;
    const result = await pool.query(
      "INSERT INTO games (game_name) VALUES ($1)",
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
    res.json(result.rows[0]);
  } catch (err) {
    return next(err);
  }
});
module.exports = router;
