require("dotenv").config();

const SECRET_KEY = process.env.SECRET_KEY || "test";

const PORT = process.env.PORT || 5000;

//for development
let DB_URI;
if (process.env.NODE_ENV === "test") {
  DB_URI = "nteract_test";
} else {
  DB_URI = process.env.DATABASE_URL || "nteract";
}

module.exports = {
  SECRET_KEY,
  PORT,
  DB_URI,
};
