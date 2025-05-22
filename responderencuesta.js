function responderEncuesta(lista, index, opcion) {
    lista[index].respuesta.push(opcion);
    console.log("gracias por tu respuesta");
    console.log(lista)
}

module.exports = {responderEncuesta};