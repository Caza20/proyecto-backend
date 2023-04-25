const { default: axios } = require('axios');
const repuestos = require('../../models/repuestoModels')

const allRepuestosService = async () => {
    try{
        // Buscamos en la base de datos todos los repuestos
        const allRepuestos = await repuestos.find({},'name lado auto tipo precio');
        
        // Podemos consologuear para ver si esta bien
        //console.log(allRepuestos);

        // Si no hay productos en la base de datos mandamos el mensaje
        if (allRepuestos.length === 0) return {message: "La base de datos esta vacia, no hay repuestos cargados", statusCode: 204}

        // consultamos el valor del dolar a la api externa
        const dolarData  = await axios.get('https://criptoya.com/api/dolar')
        if (!dolarData) return { message: "No se encontró valor de dolar"}
        const dolarBlue = dolarData.data.blue; 
        // Consologueamos el valor para ver si esta bien
        //console.log(dolar.blue)
    
        // Agregamos el valor del producto en ARS
        const allRepuestosCopy = allRepuestos.map(repuesto => ({...repuesto._doc, precio_ARS: repuesto.precio*dolarBlue}))
        // COnsologueamos para ver si esta bien
        //console.log(allRepuestosCopy)
        
        // retornamos el array con los productos
        return allRepuestosCopy
        
      
    } catch(error){
        // Si durante la consulta ocurrio un error lo devolvemos
        return({message: "Ocurrio un error", statusCode: 400, error});
    }
}

module.exports = allRepuestosService;



