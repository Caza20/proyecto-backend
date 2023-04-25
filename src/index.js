const server = require('./server/server');
require('dotenv').config();

// conexion base de datos
require('./db/config');

// configuracion del puerto. Por defecto 5000, sino lo que esta en el archivo .env
const PORT = process.env.PORT || 5000;

// levantamos el servidor
server.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
})

