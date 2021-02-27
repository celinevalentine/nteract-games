// const { Client } = require("pg");
// const { DB_URI } = require("./config");
// const db = new Client({ connectionString: DB_URI });
// db.connect();

require("dotenv").config();
const { Pool } = require("pg");

const devConfig = {
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  port: process.env.PG_PORT,
};

const proConfig = {
  connectionString: process.env.DATABASE_URL,
};

const db = new Pool(
  process.env.NODE_ENV === "production" ? proConfig : devConfig,
);

module.exports = db;
