//hotspot class

const db = require("../db");
const ExpressError = require("../expressError");

class hotspot {
  static async findAll() {
    const hotspotsRes = await db.query(`
      SELECT * FROM hotspot`);
    return hotspotsRes.rows;
  }

  static async create({ hotspot_name, x, y, width, height, task_id, game_id }) {
    const result = await db.query(
      `INSERT INTO hotspot (hotspot_name, x,y,width,height,task_id,game_id) VALUES ($1,$2,$3,$4,$5,$6,$7) returning *`,
      [hotspot_name, x, y, width, height, task_id, game_id],
    );
    return result.rows[0];
  }

  static async findOne(id) {
    const hotspotRes = await db.query(`SELECT * FROM hotspot WHERE id = $1`, [
      id,
    ]);
    const hotspot = hotspotRes.rows[0];
    if (!hotspot) {
      throw new ExpressError(`There exists no hotspot '${id}'`, 404);
    }
    return hotspot;
  }
  static async findOnebyTask(tid) {
    const hotspotRes = await db.query(
      `SELECT * FROM hotspot WHERE task_id = $1`,
      [tid],
    );
    const hotspot = hotspotRes.rows[0];
    if (!hotspot) {
      throw new ExpressError(`There exists no hotspot '${tid}'`, 404);
    }
    return hotspot;
  }

  static async update(id, data) {
    const result = await db.query(
      `UPDATE hotspot SET hotspot_name=$1,x=$2,y=$3,width=$4,height=$5,task_id=$6,game_id=$7 WHERE id = $8 returning *`,
      [
        data.hotspot_name,
        data.x,
        data.y,
        data.width,
        data.height,
        data.task_id,
        data.game_id,
        id,
      ],
    );
    const hotspot = result.rows[0];
    if (!hotspot) {
      throw new ExpressError(`No such hotspot: ${id}`, 404);
    }
    return hotspot;
  }
  static async remove(id) {
    const result = await db.query(
      `DELETE FROM hotspot WHERE id = $1 RETURNING id`,
      [id],
    );
    if (result.rows.length === 0) {
      throw new ExpressError(`There exists no job '${id}`, 404);
    }
  }
}

module.exports = hotspot;
