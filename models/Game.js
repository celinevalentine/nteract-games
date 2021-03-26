//game class

const db = require("../db");
const ExpressError = require("../ExpressError");

class Game {
  static async findAll() {
    const gamesRes = await db.query(`
      SELECT * FROM game`);
    return gamesRes.rows;
  }

  static async create({ game_name, icon_url }) {
    const result = await db.query(
      `INSERT INTO game (game_name,icon_url) VALUES ($1,$2) returning *`,
      [game_name, icon_url],
    );
    return result.rows[0];
  }

  static async findOne(id) {
    const gameRes = await db.query(`SELECT * FROM game WHERE id = $1`, [id]);
    const game = gameRes.rows[0];
    if (!game) {
      throw new ExpressError(`There exists no game '${id}'`, 404);
    }
    const tasksRes = await db.query(`SELECT * FROM task WHERE game_id = $1`, [
      id,
    ]);

    game.task = tasksRes.rows;
    return game;
  }

  static async update(id, data) {
    const result = await db.query(
      `UPDATE game SET game_name=$1,icon_url=$2 WHERE id = $3 returning *`,
      [data.game_name, data.icon_url, id],
    );
    const game = result.rows[0];
    if (!game) {
      throw new ExpressError(`No such game: ${id}`, 404);
    }
    return game;
  }
  static async remove(id) {
    const result = await db.query(
      `DELETE FROM game WHERE id = $1 RETURNING id`,
      [id],
    );
    if (result.rows.length === 0) {
      throw new ExpressError(`There exists no job '${id}`, 404);
    }
  }
}

module.exports = Game;
