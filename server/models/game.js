//game class

const db = require("../db");
const ExpressError = require("../expressError");

class Game {
  static async findAll() {
    const gamesRes = await db.query(`
      SELECT game_name FROM games`);
    return gamesRes.rows;
  }

  static async create(data) {
    const result = await db.query(
      `INSERT INTO games (game_name) VALUES($1) RETURNING id, game_name`,
      [game_name],
    );
    return result.row[0];
  }
}

module.exports = Game;
