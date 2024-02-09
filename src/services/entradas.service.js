const { Entrada, EntradaModel } = require("../db/models/entradas.model");

class EntradasService {
  constructor() {
    // this.model = Entrada;
  }

  async getEntradas() {
    const entradas = await Entrada.findAll();
    return entradas;
  }

  async getEntrada(id) {
    const entrada = await Entrada.findOne({
      where: {
        id,
      },
    });
    return entrada;
  }

  async createEntrada(entrada) {
    const entradaSinId = { ...entrada };
    delete entradaSinId.id;

    const newEntrada = await Entrada.create(entradaSinId);
    return newEntrada;
  }

  async updateEntrada(id, entrada) {
    const entradaToUpdate = await Entrada.findOne({
      where: {
        id,
      },
    });

    await entradaToUpdate.update(entrada);
    return entradaToUpdate;
  }

  async deleteEntrada(id) {
    const entradaToDelete = await Entrada.findOne({
      where: {
        id,
      },
    });

    await entradaToDelete.destroy();
    return entradaToDelete;
  }
}

module.exports = EntradasService;
