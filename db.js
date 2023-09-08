const { Sequelize } = require("sequelize");
const {
  DB_USER,
  DB_HOST,
  DB_PORT,
  DB_PASSWORD,
  DB_NAME,
  ACCESS_SECRET_KEY,
  REFRESH_SECRET_KEY,
} = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  dialect: "postgres",
  host: DB_HOST,
  port: DB_PORT,
});

module.exports = sequelize;
