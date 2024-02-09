const { Model, DataTypes } = require("sequelize");

const ENTRADAS_TABLE = "entradas";

class Entrada extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: ENTRADAS_TABLE,
      modelName: "Entrada",
      timesStamos: true,
    };
  }
}

const EntradaModel = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  titulo: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "titulo",
  },
  autor: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "autor",
  },
  fecha: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "fecha",
  },
  contenido: {
    allowNull: false,
    type: DataTypes.TEXT,
    field: "contenido",
  },
};

module.exports = { Entrada, EntradaModel };
