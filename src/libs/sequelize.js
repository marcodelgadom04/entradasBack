const { Sequelize } = require("sequelize");

const { config } = require("../config/config");
const setUpModels = require("../db/models");

const sequelize = new Sequelize(
  config.dbName,
  config.dbUser,
  config.dbPassword,
  {
    host: config.dbHost,
    dialect: "mysql",
    port: config.dbPort,
  }
);

sequelize.sync(); // Sincroniza la base de datos con el modelo
setUpModels(sequelize); // Conexion de la base de datos con el modelo

module.exports = sequelize;
