const express = require('express');
const { buscarPorNombreController } = require('../../controller/repuestos/buscarPorNombreController');
const buscarPorNombreRouter = express.Router();

buscarPorNombreRouter.get('/:name', buscarPorNombreController)

module.exports = buscarPorNombreRouter;