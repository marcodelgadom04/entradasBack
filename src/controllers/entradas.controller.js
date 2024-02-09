const EntradasService = require("../services/entradas.service");
const service = new EntradasService();

const create = async (req, res) => {
  try {
    const entrada = await service.createEntrada(req.body);
    res.json({ success: true, data: entrada });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};

const get = async (req, res) => {
  try {
    const entradas = await service.getEntradas();
    res.json(entradas);
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};

const getById = async (req, res) => {
  try {
    const entrada = await service.getEntrada(req.params.id);
    res.json(entrada);
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};

const update = async (req, res) => {
  try {
    const entrada = await service.updateEntrada(req.params.id, req.body);
    res.json(entrada);
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};

const _delete = async (req, res) => {
  try {
    const entrada = await service.deleteEntrada(req.params.id);
    res.json(entrada);
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};

module.exports = {
    create,
    get,
    getById,
    update,
    _delete,
};
