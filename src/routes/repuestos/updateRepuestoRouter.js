const express = require('express');
const {check} = require('express-validator')
const updateRepuestoController = require('../../controller/repuestos/updateRepuestoController')
const validator = require('../../utils/middlewares/validator');
const updateRepuestoRouter = express.Router();

updateRepuestoRouter.put('/:name', 
    check("name").isString().withMessage("El nombre ingresado no es correcto."),
    check("lado", ['not', 'derecho', 'izquierdo'] ).isString().withMessage("El lado ingresado no es correcto"),
    check("auto", ['R9', 'R11', 'R12', 'R18', 'R19', 'CLIO', 'LOGAN', 'SANDERO', 'DUSTER']).isString().withMessage("El modelo de auto no es correcto."),
    check("tipo", ['original', 'alternativo', 'not']).isString().withMessage("El tipo de repuesto no es correcto."),
    check("precio").isInt().withMessage("El precio del repuesto no es correcto"),
    validator,
    updateRepuestoController)

module.exports = updateRepuestoRouter;
