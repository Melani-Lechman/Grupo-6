// Esta función analiza las respuestas de cada encuesta y cuenta cuántas veces se repite cada respuesta
function analizarResultados(encuestas) {
  return encuestas.map(encuesta => {
    // Usamos reduce para contar las respuestas
    const conteo = encuesta.respuesta.reduce((contador, respuesta) => {
      // Si la respuesta ya existe en el contador, le sumamos 1. Si no, la iniciamos en 1.
      contador[respuesta] = (contador[respuesta] || 0) + 1;
      return contador;
    }, {}); // El acumulador empieza como un objeto vacío

    // Devolvemos un objeto con la pregunta y sus resultados contados
    return {
      pregunta: encuesta.pregunta,
      resultados: conteo
    };
  });
}

// Exportamos la función para poder usarla en otros archivos
module.exports = { analizarResultados};
