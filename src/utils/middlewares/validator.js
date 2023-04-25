const { validationResult } = require('express-validator');

// validador de que los campos ingresados son correctos. Si hay errores se retorna el mismo
const validator = async (req,res, next) => {
    const errores = validationResult(req);
    if (!errores.isEmpty()){
        return res.status(400).json({error: errores.array()})
    }
    next();
}

module.exports = validator;