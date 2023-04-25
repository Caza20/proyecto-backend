const express = require('express');
const { buscarPorAutoController } = require('../../controller/repuestos/buscarPorAutoController');
const buscarPorAutoRouter = express.Router();

buscarPorAutoRouter.get('/:auto', buscarPorAutoController)

module.exports = buscarPorAutoRouter;