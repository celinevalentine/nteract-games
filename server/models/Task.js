//task class

const db = require("../db");
const ExpressError = require("../expressError");

class Task {
  static async findAll() {
    const tasksRes = await db.query(`
      SELECT * FROM task`);
    return tasksRes.rows;
  }

  static async create({
    img_url,
    opener,
    num_answers,
    task_number,
    task_name,
    protips,
    closer,
    reminder,
    game_id,
  }) {
    const result = await db.query(
      `INSERT INTO task (img_url,opener,num_answers,task_number,task_name,protips,closer,reminder,game_id) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) returning *`,
      [
        img_url,
        opener,
        num_answers,
        task_number,
        task_name,
        protips,
        closer,
        reminder,
        game_id,
      ],
    );
    return result.rows[0];
  }

  static async findOne(id) {
    const taskRes = await db.query(`SELECT * FROM task WHERE id = $1`, [id]);
    const task = taskRes.rows[0];
    if (!task) {
      throw new ExpressError(`There exists no task '${id}'`, 404);
    }
    const taskHotspotRes = await db.query(
      `SELECT t.id AS task_id, t.task_number, h.hotspot_name, h.x, h.y, h.width,h.height 
        FROM task As t 
          LEFT JOIN task_hotspot As th 
            On t.id=th.task_id 
          LEFT JOIN hotspot As h 
            On th.hotspot_id=h.id 
        WHERE t.id = $1;`,
      [id],
    );
    task.hotspot = taskHotspotRes.rows;
    return task;
  }

  static async update(id, data) {
    const result = await db.query(
      `UPDATE task SET img_url=$1,opener=$2,num_answers=$3,task_number=$4,task_name=$5,protips=$6,closer=$7,reminder=$8,game_id=$9 WHERE id = $10 returning *`,
      [
        data.img_url,
        data.opener,
        data.num_answers,
        data.task_number,
        data.task_name,
        data.protips,
        data.closer,
        data.reminder,
        data.game_id,
        id,
      ],
    );
    const task = result.rows[0];
    if (!task) {
      throw new ExpressError(`No such task: ${id}`, 404);
    }
    return task;
  }
  static async remove(id) {
    const result = await db.query(
      `DELETE FROM task WHERE id = $1 RETURNING id`,
      [id],
    );
    if (result.rows.length === 0) {
      throw new ExpressError(`There exists no job '${id}`, 404);
    }
  }
}

module.exports = Task;
