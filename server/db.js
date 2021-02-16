// const { Client } = require("pg");
// const { DB_URI } = require("./config");

// const db = new Client({ connectionString: DB_URI });

// db.connect();

const { Pool } = require("pg");
const db = new Pool({
  username: "postgres",
  password: "",
  database: "nteract",
  host: "localhost",
  port: 5432,
});

module.exports = db;
