const { default: axios } = require('axios');
const repuestos = require('../../models/repuestoModels')

const buscarPorNombreService = async (req) => {
    try{
        // obtenemos el parametro
        const { name } = req.params;

        // Buscamos en la base de datos el o los productos que coincidan con el parametro
        const buscarRepuestos = await repuestos.find({name: { $regex: name, $options: "i" }},'name lado auto tipo precio');

        // Si no encuentra ninguno, enviamos un mendaje
        if ((buscarRepuestos.length === 0) || (!buscarRepuestos)){
            return{message: "Repuesto no encontrado", statusCode: 404};
        }

        // COnsologueamos el array
        //console.log(buscarRepuestos);
        
        // Obtenemos el valor del dolar desde api externa
        const dolarData  = await axios.get('https://criptoya.com/api/dolar')
        if (!dolarData) return { message: "No se encontró valor de dolar", statusCode: 424}
        const dolarBlue = dolarData.data.blue; 
        
        // agregamos el valor del producto en ARS
        const buscarRepuestosCopy = buscarRepuestos.map(repuesto => ({...repuesto._doc, precio_ARS: repuesto.precio*dolarBlue}))

        // Consologueamos el array
        //console.log(buscarRepuestosCopy)

        // si todo esta bien retornamos el array con el o los productos
        return buscarRepuestosCopy
       
    } catch(error){
        // Si durante la consulta ocurrio un error, se retorna
        return({message: "Ocurrio un error", statusCode: 400, error});
    }
}

module.exports = buscarPorNombreService;