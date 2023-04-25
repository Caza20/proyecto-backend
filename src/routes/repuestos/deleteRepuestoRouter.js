const express = require('express');
const deleteRepuestoController = require('../../controller/repuestos/deleteRepuestoController')
const deleteRepuestoRouter = express.Router();

deleteRepuestoRouter.delete('/:name', deleteRepuestoController)

module.exports = deleteRepuestoRouter;
