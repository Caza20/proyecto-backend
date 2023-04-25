const repuesto = require('../../models/repuestoModels');
const deleteRepuestoService = require('../../services/repuestos/deleteRepuestoService')

const deleteRepuestoController = async (req,res) => {
    const deleteRepuesto = await deleteRepuestoService(req);
    res.json(deleteRepuesto);
}

module.exports = deleteRepuestoController;