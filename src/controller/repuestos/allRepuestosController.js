const allRepuestosService = require('../../services/repuestos/allRepuestosService');

const allRepuestosController = async (req,res) => {
    const repuestos = await allRepuestosService();
    if (repuestos.statusCode === Number(204)) return res.json(repuestos.message);
    res.json(repuestos);
}

module.exports = allRepuestosController;