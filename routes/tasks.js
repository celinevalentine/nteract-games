const Router = require("express").Router;
const router = new Router();
const ExpressError = require("../expressError");
const Task = require("../models/Task");
const { validate } = require("jsonschema");
const taskNewSchema = require("../schemas/taskNewSchema.json");
<<<<<<< HEAD
const checkJwt = require("../middleware/auth");

router.post("/", checkJwt, async (req, res, next) => {
=======

router.post("/", async (req, res, next) => {
>>>>>>> 44cbac653ec2a1031b11d31fe89345c064c686da
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
<<<<<<< HEAD
router.get("/", checkJwt, async (req, res, next) => {
=======
router.get("/", async (req, res, next) => {
>>>>>>> 44cbac653ec2a1031b11d31fe89345c064c686da
  try {
    const tasks = await Task.findAll(req.query);
    res.json(tasks);
  } catch (err) {
    return next(err);
  }
});
<<<<<<< HEAD
router.get("/:id", checkJwt, async (req, res, next) => {
=======
router.get("/:id", async (req, res, next) => {
>>>>>>> 44cbac653ec2a1031b11d31fe89345c064c686da
  try {
    const task = await Task.findOne(req.params.id);
    res.json(task);
  } catch (err) {
    return next(err);
  }
});
<<<<<<< HEAD
router.put("/:id", checkJwt, async (req, res, next) => {
=======
router.put("/:id", async (req, res, next) => {
>>>>>>> 44cbac653ec2a1031b11d31fe89345c064c686da
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
<<<<<<< HEAD
router.delete("/:id", checkJwt, async (req, res, next) => {
=======
router.delete("/:id", async (req, res, next) => {
>>>>>>> 44cbac653ec2a1031b11d31fe89345c064c686da
  try {
    const { id } = req.params;
    await Task.remove(id);
    res.json({ message: "The task was deleted." });
  } catch (err) {
    return next(err);
  }
});
module.exports = router;
