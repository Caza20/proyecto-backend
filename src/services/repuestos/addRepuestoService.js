const { default: axios } = require('axios');
const RepuestoModel = require('../../models/repuestoModels')

const addRepuestoService = async(req) => {
    try{
        // Guardamos los datos del body
        const repuesto = req.body;
        
        // consultamos la api externa para obtener el valor del dolar
        const dolarData  = await axios.get('https://criptoya.com/api/dolar')
        if (!dolarData) return { message: "No se encontró valor de dolar", statusCode: 424}
        const dolarBlue = dolarData.data.blue; 
        //Consologueamos el dolar para ver si esta bien
        //console.log(dolarBlue)
        
        // convertimos el precio ARS a dolar
        repuesto.precio = Math.ceil(repuesto.precio/dolarBlue);
        
        // Si existe un producto con los mismos datos se devuelve el mensaje que ya existe
        const existRepuesto = await RepuestoModel.findOne({"name": repuesto.name, "lado":repuesto.lado, "auto":repuesto.auto, "tipo": repuesto.tipo });
        if (existRepuesto) return ({message: "Ya existe un repuesto con esos datos", statusCode: 409});
        
        // Si todo esta bien, guardamos el producto en la base de datos
        const nuevoRepuesto = new RepuestoModel(repuesto);
        await nuevoRepuesto.save();
        return ({message: `Repuesto agregado con exito. Precio del repuesto convertido a valor de dolar: $${dolarBlue}`, statusCode: 201});
    } catch(error){
        // Si durante la consulta ocurre un error, lo retornamos
        return({message: "Ocurrio un error", statusCode: 400, error});
    }
}

module.exports = addRepuestoService;