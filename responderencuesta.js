// Esta función agrega una respuesta a la encuesta seleccionada y muestra un mensaje de agradecimiento
function responderEncuesta(lista, index, opcion) {
  // Accedemos a la encuesta en la posición indicada por 'index' y agregamos la nueva respuesta al array 'respuesta'
  lista[index].respuesta.push(opcion);

  // Mostramos un mensaje de agradecimiento al usuario
  console.log("gracias por tu respuesta");

  // Mostramos por consola la lista actualizada de encuestas (con la nueva respuesta añadida)
  console.log(lista);
}

// Exportamos la función para poder usarla en otros archivos
module.exports = { responderEncuesta };
