const repuesto = require('../../models/repuestoModels');
const deleteRepuestoService =  async (req) =>{
    try{
        // obtenemos el parametro
        const { name } = req.params;

        // buscamos en la base de datos el producto
        const deleteBaseDeDatos = await repuesto.find({name});

        // si no lo encuentra retornamos un mensaje
        if ((deleteBaseDeDatos.length === 0) || (!deleteBaseDeDatos)){
            return{message: "Repuesto no encontrado", statusCode: 404};
        }

        // borramos el producto de la base de datos y retornamos un mensaje
        await repuesto.deleteOne({name});
        return {message: "Repuesto borrado con exito", statusCode: 200};
    } catch(error){
        // Si durante la consulta ocurrio un error,lo retornamos
        return({message: "Ocurrio un error", statusCode: 400, error});
    }
}

module.exports = deleteRepuestoService;
