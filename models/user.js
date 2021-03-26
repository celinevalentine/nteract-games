// User class

const db = require("../db");
const ExpressError = require("../ExpressError");

class User {
  static async all() {
    const results = await db.query;
  }
}
