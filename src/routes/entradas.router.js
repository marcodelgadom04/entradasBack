const express = require('express');
const router = express.Router();
const entradasController = require('../controllers/entradas.controller');

router.get('/', entradasController.get);
router.get('/:id', entradasController.getById);
router.post('/', entradasController.create);
router.put('/:id', entradasController.update);
router.delete('/:id', entradasController._delete);

module.exports = router;