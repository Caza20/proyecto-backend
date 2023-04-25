const express = require('express');
const allRepuestosController = require('../../controller/repuestos/allRepuestosController');
const allRepuestosRouter = express.Router();

allRepuestosRouter.get('/', allRepuestosController)

module.exports = allRepuestosRouter;