const repuesto = require('../../models/repuestoModels');
const updateRepuestoService = require('../../services/repuestos/updateRepuestoService')

const updateRepuestoController = async (req,res) => {
    const updateRepuesto = await updateRepuestoService(req);
    if (updateRepuesto.statusCode === Number(400)) return res.json(updateRepuesto.error.message)
    res.json(updateRepuesto);
}

module.exports = updateRepuestoController;