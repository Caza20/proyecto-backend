const repuesto = require('../../models/repuestoModels');
const addRepuestoService = require('../../services/repuestos/addRepuestoService')

const addRepuestoController = async (req,res) => {
    const addRepuesto = await addRepuestoService(req);
    if (addRepuesto.statusCode === Number(400)) return res.json(addRepuesto.error.message);
    res.json(addRepuesto);
}

module.exports = addRepuestoController;