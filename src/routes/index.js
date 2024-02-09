const express = require('express');

const entradasRouter = require('./entradas.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/entradas', entradasRouter);
}

module.exports = routerApi;