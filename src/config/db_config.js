require("dotenv").config();

const db = {
  mongoUrl: process.env.CONNECTION_STRING,
};

module.exports = { db };