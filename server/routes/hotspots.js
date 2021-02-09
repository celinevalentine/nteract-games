const Router = require("express").Router;
const router = new Router();
const ExpressError = require("../expressError");
const pool = require("../db");
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
    const { hotspot_name, x, y, width, height, img_id } = req.body;
    const result = await pool.query(
      "INSERT INTO hotspots (hotspot_name, x, y, width, height, img_id) VALUES ($1,$2,$3,$4,$5,$6) returning *",
      [hotspot_name, x, y, width, height, img_id],
    );
    res.json(result.rows[0]);
  } catch (err) {
    return next(err);
  }
});
router.get("/", async (req, res, next) => {
  try {
    const result = await pool.query("SELECT * FROM hotspots");
    res.json(result.rows);
  } catch (err) {
    return next(err);
  }
});
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM hotspots WHERE id = $1", [
      id,
    ]);
    console.log(id);
    res.json(result.rows[0]);
  } catch (err) {
    return next(err);
  }
});
router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const { hotspot_name, x, y, width, height, img_id } = req.body;
    const result = await pool.query(
      "UPDATE hotspots SET hotspot_name= $1, x=$2, y=$3,width=$4, height=$5,img_id=$6 WHERE id=$7 returning * ",
      [hotspot_name, x, y, width, height, img_id, id],
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
    const result = await pool.query("DELETE FROM hotspots WHERE id = $1", [id]);
    console.log(id);
    res.json("The hotspot was deleted.");
  } catch (err) {
    return next(err);
  }
});
module.exports = router;
