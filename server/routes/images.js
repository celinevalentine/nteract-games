const Router = require("express").Router;
const router = new Router();
const ExpressError = require("../expressError");
const pool = require("../db");
const { validate } = require("jsonschema");
const imageNewSchema = require("../schemas/imageNewSchema.json");

router.post("/", async (req, res, next) => {
  try {
    const validation = validate(req.body, imageNewSchema);

    if (!validation.valid) {
      throw new ExpressError(
        validation.errors.map((e) => e.stack),
        400,
      );
    }
    const { img_name, img_url, game_id } = req.body;
    const result = await pool.query(
      "INSERT INTO images (img_name, img_url,game_id) VALUES ($1,$2,$3) returning *",
      [img_name, img_url, game_id],
    );
    res.json(result.rows[0]);
  } catch (err) {
    return next(err);
  }
});
router.get("/", async (req, res, next) => {
  try {
    const result = await pool.query("SELECT * FROM images");
    res.json(result.rows);
  } catch (err) {
    return next(err);
  }
});
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM images WHERE id = $1", [id]);
    console.log(id);
    res.json(result.rows[0]);
  } catch (err) {
    return next(err);
  }
});
router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const { img_name, img_url } = req.body;
    const result = await pool.query(
      "UPDATE games SET img_name= $1, img_url=$2  WHERE id=$3 returning *",
      [img_name, img_url, id],
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
    const result = await pool.query("DELETE FROM images WHERE id = $1", [id]);
    console.log(id);
    res.json("The image was deleted.");
  } catch (err) {
    return next(err);
  }
});
module.exports = router;
