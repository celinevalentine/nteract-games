//game class

const db = require("../db");
const ExpressError = require("../expressError");

class Game {
  static async findAll(data) {}
  static async create({ game_name }) {
    const result = await db.query(
      `INSERT INTO games (game_name) VALUES($1) RETURNING id, game_name`,
      [game_name],
    );
    return result.row[0];
  }
}
