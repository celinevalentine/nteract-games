const Router = require("express").Router;
const router = new Router();
// const user = require("../models/user");
const ExpressError = require("../expressError");
const pool = require("../db");
const { validate } = require("jsonschema");
const userNewSchema = require("../schemas/userNewSchema.json");

router.post("/", async (req, res, next) => {
  try {
    const validation = validate(req.body, userNewSchema);

    if (!validation.valid) {
      throw new ExpressError(
        validation.errors.map((e) => e.stack),
        400,
      );
    }
    const { username, email } = req.body;
    const result = await pool.query(
      "INSERT INTO users (username, email) VALUES ($1,$2) returning *",
      [username, email],
    );
    res.json(result.rows[0]);
  } catch (err) {
    return next(err);
  }
});
router.get("/", async (req, res, next) => {
  try {
    const result = await pool.query("SELECT * FROM users");
    res.json(result.rows);
  } catch (err) {
    return next(err);
  }
});
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
    console.log(id);
    res.json(result.rows[0]);
  } catch (err) {
    return next(err);
  }
});
router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const { username, email } = req.body;
    const result = await pool.query(
      "UPDATE users SET username= $1, email=$2 WHERE id=$3 returning *",
      [username, email, id],
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
    const result = await pool.query("DELETE FROM users WHERE id = $1", [id]);
    console.log(id);
    res.json("The user was deleted.");
  } catch (err) {
    return next(err);
  }
});
module.exports = router;
