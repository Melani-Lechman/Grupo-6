// Esta función muestra por consola todas las encuestas y sus opciones formateadas
function mostrarEncuestas(lista) {
  lista.forEach((encuesta, index) => {
    // Formateamos las opciones con su número usando map y las unimos con " - " usando join
    const opciones = encuesta.opciones.map((opcion, i) => `${i + 1}) ${opcion}`).join(" - ");
    
    // Mostramos el número de encuesta y su pregunta
    console.log(`Encuesta ${index + 1}: ${encuesta.pregunta}`);
    
    // Mostramos las opciones formateadas
    console.log(`Opciones: ${opciones}`);
  });
}

// Exportamos la función para poder usarla en otros archivos
module.exports = { mostrarEncuestas };
