const express = require('express');
const server = express();



/*************** Routers  ***************************/
const allRepuestosRouter = require('../routes/repuestos/allRepuestosRouter');
const addRepuestoRouter = require('../routes/repuestos/addRepuestoRouter')
const updateRepuestoRouter = require('../routes/repuestos/updateRepuestoRouter');
const deleteRepuestoRouter = require('../routes/repuestos/deleteRepuestoRouter');
const buscarPorNombreRouter = require('../routes/repuestos/buscarPorNombreRouter');
const buscarPorAutoRouter = require('../routes/repuestos/buscarPorAutoRouter');
/*********** Documentacion API **************************/
const swagger = require('../utils/documentation/swagger');

server.use(express.json());

// ruta de documentacion de api
swagger('/api/documentation/swagger', server);

// Obtener todos los productos
server.use('/api/repuestos', allRepuestosRouter);

// añadir un producto
server.use('/api/addRepuesto', addRepuestoRouter);

// actualizar producto
server.use('/api/updateRepuesto', updateRepuestoRouter);

// borrar producto
server.use('/api/deleteRepuesto', deleteRepuestoRouter);

// obtener producto por nombre
server.use('/api/buscar', buscarPorNombreRouter);

// obtener producto por auto
server.use('/api/buscarPorAuto', buscarPorAutoRouter);

/************** Middleware ***************************/

// Middleware a nivel aplicacion
const logMiddleware = require('../utils/middlewares/logMiddleware');
server.use(logMiddleware);

// ruta inicial del servidor
server.get('/api', (req,res) => {
    res.send('Servidor Funcionando');
})
module.exports = server;