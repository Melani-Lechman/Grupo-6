// Esta función elimina una encuesta del array según el índice dado
function eliminarEncuesta(encuestas, indice) {
  // Verificamos si el índice es válido (dentro del rango del array)
  if (indice >= 0 && indice < encuestas.length) {
    // Si es válido, eliminamos la encuesta usando splice (quita 1 elemento en la posición 'indice')
    encuestas.splice(indice, 1);
    // Devolvemos true para indicar que se eliminó correctamente
    return true;
  }
  // Si el índice no es válido, no se elimina nada y devolvemos false
  return false;
}

// Exportamos la función para que pueda ser usada en otros archivos
module.exports = { eliminarEncuesta };
