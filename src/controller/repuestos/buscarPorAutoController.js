const buscarPorAutoService = require('../../services/repuestos/buscarPorAutoService');

const buscarPorAutoController = async (req,res) => {
    const repuestos = await buscarPorAutoService(req);
    res.json(repuestos);
}

module.exports = {buscarPorAutoController}