// Middleware a nivel aplicacion que se ejecuta cuando se accede al servidor para mostrar la hora

const logMiddleware = (req, res, next) => {
    const fecha = new Date();
    const log = `${fecha.getDate()} - ${fecha.getMonth()} / ${fecha.getHours()} : ${fecha.getMinutes()} - ${req.method}:${req.ip}`
    console.log(log)
    next();
}

module.exports = logMiddleware;