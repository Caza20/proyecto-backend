const buscarPorNombreService = require('../../services/repuestos/buscarPorNombreService');

const buscarPorNombreController = async (req,res) => {
    const repuestos = await buscarPorNombreService(req);
    res.json(repuestos);
}

module.exports = {buscarPorNombreController}