const Router = require("express").Router;
const router = new Router();
const ExpressError = require("../expressError");
const Hotspot = require("../models/Hotspot");
const { validate } = require("jsonschema");
const hotspotNewSchema = require("../schemas/hotspotNewSchema.json");
<<<<<<< HEAD
const checkJwt = require("../middleware/auth");

router.post("/", checkJwt, async (req, res, next) => {
=======

router.post("/", async (req, res, next) => {
>>>>>>> 44cbac653ec2a1031b11d31fe89345c064c686da
  try {
    const validation = validate(req.body, hotspotNewSchema);

    if (!validation.valid) {
      throw new ExpressError(
        validation.errors.map((e) => e.stack),
        400,
      );
    }
    const hotspot = await Hotspot.create(req.body);
    return res.status(201).json(hotspot);
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
    const hotspots = await Hotspot.findAll(req.query);
    res.json(hotspots);
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
    const hotspot = await Hotspot.findOne(req.params.id);
    res.json(hotspot);
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
    const validation = validate(req.body, hotspotNewSchema);
    if (!validation.valid) {
      throw new ExpressError(
        validation.errors.map((e) => e.stack),
        400,
      );
    }
    const hotspot = await Hotspot.update(req.params.id, req.body);
    return res.json(hotspot);
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
    await Hotspot.remove(id);
    res.json({ message: "The hotspot was deleted." });
  } catch (err) {
    return next(err);
  }
});
module.exports = router;
