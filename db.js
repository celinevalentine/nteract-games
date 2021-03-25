const { Client } = require("pg");
const { DB_URI } = require("./config");

const db = new Client({
  connectionString: DB_URI,
  ssl: process.env.DATABASE_URL
    ? {
        rejectUnauthorized: false,
      }
    : false,
});

db.connect();

module.exports = db;
