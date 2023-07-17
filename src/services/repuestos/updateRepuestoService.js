const { default: axios } = require('axios');
const repuesto = require('../../models/repuestoModels');

const updateRepuestoService =  async (req) =>{
    try{
        // obtenemos el parametro
        const { name } = req.params;
        // guardamos el body
        const updateRepuesto = req.body;
        
        // buscamos el producto en la base de datos
        const updateBaseDeDatos = await repuesto.findOne({name});

        // Si no lo encuentra retornamos un mensaje
        if ((updateBaseDeDatos === 0) || (!updateBaseDeDatos)){
            return{message: "Repuesto no encontrado", statusCode: 404};
        }

        // actualizamos el producto
        updateBaseDeDatos.name = updateRepuesto.name;
        updateBaseDeDatos.lado = updateRepuesto.lado;
        updateBaseDeDatos.auto = updateRepuesto.auto;
        updateBaseDeDatos.tipo = updateRepuesto.tipo;

        // obtenemos el valor del dolar desde api externa
        const dolarData  = await axios.get('https://criptoya.com/api/dolar')
        if (!dolarData) return { message: "No se encontró valor de dolar",statusCode: 424}
        const dolarBlue = dolarData.data.blue; 
        //console.log(dolarBlue)

        // actualizamos el precio con el valor del dolar
        updateBaseDeDatos.precio = Math.ceil(updateRepuesto.precio/dolarBlue);

        // guardamos el producto actualizado en la base de datos y retornamos un mensaje
        await updateBaseDeDatos.save();
        return{message: "Repuesto actualizado con exito", statusCode: 201}
    } catch(error){
        // Si durante la consulta ocurrio un error, lo retornamos
        return({message: "Ocurrio un error", statusCode: 400, error});
    }
}

module.exports = updateRepuestoService;