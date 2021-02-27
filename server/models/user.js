// User class

const db = require("../db");
const ExpressError = require("../expressError");

class User {
  static async all() {
    const results = await db.query;
  }
}
