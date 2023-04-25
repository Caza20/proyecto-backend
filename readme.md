# Servidor de respuestos de autos Renault 

## Servidor para poder consultar base de datos y realizar CRUD. 
## El mismo sirve como servidor para que el front-end pueda consultar y asi el usuario puede llevar un control de stock de su negocio. 
## Usa como base la consulta a una api para tener siempre los valores de los respuestos actualizados segun el valor del dolar.

## :hammer:Funcionalidades del proyecto

- `Obtener todos los repuestos [GET]`: Consultar todos los repuestos cargados en la base de datos.
    - Si en la base de datos no hay repuestos cargados se devuelve el mensaje: "La base de datos esta vacia, no hay repuestos cargados"
    - Si ocurrió un error con la consulta de la api del dolar devuelve el mensaje: "No se encontró valor de dolar"
    - Si ocurrió cualquier otro error devuelve el mensaje con el error.
    - Si la consulta fue exitosa devuelve un JSON con todos los repuestos. El precio se muestra en ARS segun valor de dolar del dia.

- `Obtener todos los repuestos que coincidan con un nombre [GET]`: Se obtienen todos los repuestos segun el nombre ingresado por el usuario
    - Si no se encuentra el repuesto en la base de datos se devuelve el mensaje: "Repuesto no encontrado"
    - Si ocurrió un error con la consulta de la api del dolar devuelve el mensaje: "No se encontró valor de dolar"
    - Si ocurrió cualquier otro error devuelve el mensaje con el error.
    - Si la consulta fue exitosa devuelve un JSON con todos los repuestos que coincidan con el nombre. El precio se muestra en ARS segun valor de dolar del dia.

- `Obtener todos los repuestos segun modelo de auto [GET]`: Se obtienen todos los repuestos segun el modelo del auto consultado por el usuario
    - Si no se encuentra el modelo del auto en la base de datos se devuelve el mensaje:"Modelo de auto incorrecto o no hay repuestos cargados para ese modelo en la base de datos".
    - Si ocurrió un error con la consulta de la api del dolar devuelve el mensaje: "No se encontró valor de dolar"
    - Si ocurrió cualquier otro error devuelve el mensaje con el error.
    - Si la consulta fue exitosa devuelve un JSON con todos los repuestos que coincidan con el modelo del auto. El precio se muestra en ARS segun valor de dolar del dia.

- `Agregar un repuesto [POST]`: Se agrega un repuesto nuevo a la base de datos.
    - Si ocurrió un error con la consulta de la api del dolar devuelve el mensaje: "No se encontró valor de dolar".
    - Si el repuesto que se quiere agregar ya existe en la base de datos, se devuelve el mensaje: "Ya existe un repuesto con esos datos".
    - Si ocurrió cualquier otro error devuelve el mensaje con el error.
    - Si la consulta fue existosa se devuelve el mensaje: "Repuesto agregado con exito. Precio del repuesto convertido a valor de dolar: $(valor del dolar en el momento)". El usuario ingresa el precio del repuesto en ARS pero en la base de datos se guarda en USD.

- `Actualizar un repuesto [UPDATE]`: Se actualiza un repuesto existente en la base de datos.
    - Si ocurrió un error con la consulta de la api del dolar devuelve el mensaje: "No se encontró valor de dolar".
    - Si el repuesto que se quiere actualizar no existe en la base de datos, se devuelve el mensaje: "Repuesto no encontrado".
    - Si ocurrió cualquier otro error devuelve el mensaje con el error.
    - Si la consulta fue existosa se devuelve el mensaje: "Repuesto actualizado con exito". El usuario ingresa el precio del repuesto en ARS pero en la base de datos se guarda en USD.

- `Borrar un repuesto [DELETE]`: Se borra un repuesto existente de la base de datos.
    - Si el repuesto que se quiere actualizar no existe en la base de datos, se devuelve el mensaje: "Repuesto no encontrado".
    - Si ocurrió cualquier otro error devuelve el mensaje con el error.
    - Si la consulta fue existosa se devuelve el mensaje: "Repuesto borrado con exito". 

## :hammer:Rutas del CRUD

- [GET]: todos los repuestos

    - localhost:8080/api/repuestos

- [GET]: todos los repuestos segun nombre

    - localhost:8080/api/buscar/:name

- [GET]: todos los repuestos segun modelo de auto

    - localhost:8080/api/buscarPorAuto/:auto

- [POST]: agregar repuesto

    - localhost:8080/api/addRepuesto

- [UPDATE]: actualizar repuesto

    - localhost:8080/api/updateRepuesto/:name

- [DELETE]: borrar repuesto

    - localhost:8080/api/deleteRepuesto/:name

### Para ver ejemplos de las consultas al servidor ver archivo 'curl.txt'

## :hammer:Esquema para cargar o actualizar repuestos en la base de datos

        {
            "name": "   ",
            "lado": "   ",
            "auto": "   ",
            "tipo": "   ",
            "precio": xxxxx
        }

### Donde:

- [name] 
    - Se refiere al nombre del repuesto. 
    - Puede ser cualquier cadena de caracteres.

- [lado] 
    - Se refiere al lado del repuesto si es que tiene. 
    - Sólo puede recibir los campos 'derecho' ó 'izquierdo'. 
    - Cualquier otro dato sera incorrecto.

- [auto] 
    - Se refiere al nombre del modelo de auto en que se usa ese repuesto. 
    - Sólo puede recibir los campos 'R9', 'R11', 'R12', 'R18', 'R19', 'CLIO', 'LOGAN', 'SANDERO', 'DUSTER'. 
    - Cualquier otro valor, se lanzara error. (Hay mas modelos de autos, pero sólo se pusieron algunos a modo de ejemplo).

- [tipo] 
    - Se refiere al tipo de repuesto. 
    - Sólo puede recibir los campos 'original' ó 'alternativo'. 
    - Cualquier otro dato sera incorrecto.

- [precio] 
    - Se refiere al precio del repuesto en pesos argentinos (ARS). 
    - Luego a traves de una consulta a una api externa, se consulta el valor del dolar en el momento y en la base de datos el valor del repuesto se guarda en dolares.

## :hammer:Levantar el servidor

### Para poner en funcionamiento el servidor, simplemente abrir una terminal en el directorio del proyecto y ejecutar el siguiente comando:

> npm run dev

## Servidor Back-end realizado por Matias Cazanave. 2023.# proyecto-backend
