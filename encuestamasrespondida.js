// Esta función recibe un array de encuestas y devuelve las preguntas ordenadas por cantidad de respuestas (de mayor a menor)
function preguntasMasRespondidas(encuestas) {
  return encuestas
    // Ordenamos las encuestas según la cantidad de respuestas (de mayor a menor)
    .sort((a, b) => b.respuesta.length - a.respuesta.length)
    // Después de ordenar, usamos map para devolver solo el texto de la pregunta
    .map(e => e.pregunta);
}

// Exportamos la función para poder usarla en otros archivos
module.exports = { preguntasMasRespondidas };
