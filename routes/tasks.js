const Router = require("express").Router;
const router = new Router();
const ExpressError = require("../ExpressError");
const Task = require("../models/Task");
const { validate } = require("jsonschema");
const taskNewSchema = require("../schemas/taskNewSchema.json");
const checkJwt = require("../middleware/auth");

router.post("/", checkJwt, async (req, res, next) => {
  try {
    const validation = validate(req.body, taskNewSchema);

    if (!validation.valid) {
      throw new ExpressError(
        validation.errors.map((e) => e.stack),
        400,
      );
    }
    const task = await Task.create(req.body);
    return res.status(201).json(task);
  } catch (err) {
    return next(err);
  }
});
router.get("/", checkJwt, async (req, res, next) => {
  try {
    const tasks = await Task.findAll(req.query);
    res.json(tasks);
  } catch (err) {
    return next(err);
  }
});
router.get("/:id", checkJwt, async (req, res, next) => {
  try {
    const task = await Task.findOne(req.params.id);
    res.json(task);
  } catch (err) {
    return next(err);
  }
});
router.put("/:id", checkJwt, async (req, res, next) => {
  try {
    if ("id" in req.body) {
      throw new ExpressError("You are not allowed to change the ID", 400);
    }
    const validation = validate(req.body, taskNewSchema);
    if (!validation.valid) {
      throw new ExpressError(
        validation.errors.map((e) => e.stack),
        400,
      );
    }
    const task = await Task.update(req.params.id, req.body);
    return res.json(task);
  } catch (err) {
    return next(err);
  }
});
router.delete("/:id", checkJwt, async (req, res, next) => {
  try {
    const { id } = req.params;
    await Task.remove(id);
    res.json({ message: "The task was deleted." });
  } catch (err) {
    return next(err);
  }
});
module.exports = router;
