const { default: axios } = require('axios');
const repuestos = require('../../models/repuestoModels')

const buscarPorAutoService = async (req) => {
    try{
        // obtenermos el parametro 
        const { auto } = req.params;

        // buscamos en la base de datos un producto con ese parametro
        const buscarRepuestos = await repuestos.find({"auto": auto},'name lado auto tipo precio');
        // si no lo encuentra se retorna un mensaje
        if ((buscarRepuestos.length === 0) || (!buscarRepuestos)){
            return{message: "Modelo de auto incorrecto o no hay repuestos cargados para ese modelo en la base de datos", statusCode: 404};
        }

        // Consologueamos el array para ver si esta bien
        //console.log(buscarRepuestos);

        // obtenemos el valor del dolar desde una api externa
        const dolarData  = await axios.get('https://criptoya.com/api/dolar')
        if (!dolarData) return { message: "No se encontró valor de dolar", statusCode: 424}
        const dolarBlue = dolarData.data.blue; 
        
        // agregamos el valor del producto en ARS
        const buscarRepuestosCopy = buscarRepuestos.map(repuesto => ({...repuesto._doc, precio_ARS: repuesto.precio*dolarBlue}))
        
        // consologueamos el array
        //console.log(buscarRepuestosCopy)

        // si todo esta bien, retornamos el array con los productos
        return buscarRepuestosCopy
        
    } catch(error){
        // Si durante la consulta ocurrio un error, se retorna
        return({message: "Ocurrio un error", statusCode: 400, error});
    }
}

module.exports = buscarPorAutoService;