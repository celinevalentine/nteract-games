const Router = require("express").Router;
const router = new Router();
const ExpressError = require("../expressError");
const Hotspot = require("../models/Hotspot");
const { validate } = require("jsonschema");
const hotspotNewSchema = require("../schemas/hotspotNewSchema.json");

router.post("/", async (req, res, next) => {
  try {
    const validation = validate(req.body, hotspotNewSchema);

    if (!validation.valid) {
      throw new ExpressError(
        validation.errors.map((e) => e.stack),
        400,
      );
    }
    const hotspot = await Hotspot.create(req.body);
    return res.status(201).json({ hotspot });
  } catch (err) {
    return next(err);
  }
});
router.get("/", async (req, res, next) => {
  try {
    const hotspots = await Hotspot.findAll(req.query);
    res.json({ hotspots });
  } catch (err) {
    return next(err);
  }
});
router.get("/:id", async (req, res, next) => {
  try {
    const hotspot = await Hotspot.findOne(req.params.id);
    res.json({ hotspot });
  } catch (err) {
    return next(err);
  }
});
router.put("/:id", async (req, res, next) => {
  try {
    if ("id" in req.body) {
      throw new ExpressError("You are not allowed to change the ID", 400);
    }
    const validation = validate(req.body, hotspotNewSchema);
    if (!validation.valid) {
      throw new ExpressError(
        validation.errors.map((e) => e.stack),
        400,
      );
    }
    const hotspot = await Hotspot.update(req.params.id, req.body);
    return res.json({ hotspot });
  } catch (err) {
    return next(err);
  }
});
router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    await Hotspot.remove(id);
    res.json({ message: "The hotspot was deleted." });
  } catch (err) {
    return next(err);
  }
});
module.exports = router;
