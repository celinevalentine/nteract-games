const Router = require("express").Router;
const router = new Router();
const ExpressError = require("../expressError");
const pool = require("../db");
const { validate } = require("jsonschema");
const taskNewSchema = require("../schemas/taskNewSchema.json");

router.post("/", async (req, res, next) => {
  try {
    const validation = validate(req.body, taskNewSchema);

    if (!validation.valid) {
      throw new ExpressError(
        validation.errors.map((e) => e.stack),
        400,
      );
    }
    const {
      num_answers,
      task_number,
      task_name,
      protips,
      reminder,
      game_id,
    } = req.body;
    const result = await pool.query(
      "INSERT INTO tasks (num_answers,task_number,task_name,protips,reminder,game_id) VALUES ($1,$2,$3,$4,$5,$6) returning *",
      [num_answers, task_number, task_name, protips, reminder, game_id],
    );
    res.json(result.rows[0]);
  } catch (err) {
    return next(err);
  }
});
router.get("/", async (req, res, next) => {
  try {
    const result = await pool.query("SELECT * FROM tasks");
    res.json(result.rows);
  } catch (err) {
    return next(err);
  }
});
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM tasks WHERE id = $1", [id]);
    console.log(id);
    res.json(result.rows[0]);
  } catch (err) {
    return next(err);
  }
});
router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const { num_answers, task_number, task_name, protips, reminder } = req.body;
    const result = await pool.query(
      "UPDATE tasks SET num_answers= $1, task_number=$2, task_name=$3, protips=$4, reminder=$5 WHERE id=$6 returning *",
      [num_answers, task_number, task_name, protips, reminder, id],
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
    const result = await pool.query("DELETE FROM tasks WHERE id = $1", [id]);
    console.log(id);
    res.json("The task was deleted.");
  } catch (err) {
    return next(err);
  }
});
module.exports = router;
