const express = require('express');
const {check} = require('express-validator');
const addRepuestoController = require('../../controller/repuestos/addRepuestoController');
const validator = require('../../utils/middlewares/validator');
const addRepuestoRouter = express.Router();


addRepuestoRouter.post('/', 
    check("name").isString().withMessage("El nombre ingresado no es correcto."),
    check("auto").isString().withMessage("El modelo de auto no es correcto."),
    check("tipo").isString().withMessage("El tipo de repuesto no es correcto."),
    check("precio").isInt().withMessage("El precio del repuesto no es correcto"),
    validator,
addRepuestoController)

module.exports = addRepuestoRouter;