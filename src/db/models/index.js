const { Entrada, EntradaModel } = require("./entradas.model");

function setUpModels(sequelize) {
  const models = {
    Entrada: Entrada.init(EntradaModel, Entrada.config(sequelize)), // Definicion de campos, ejecucion de la base de datos
  };

  return models;
}

module.exports = setUpModels;