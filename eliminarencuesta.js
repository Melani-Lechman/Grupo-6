function eliminarEncuesta(encuestas, indice) {
  if (indice >= 0 && indice < encuestas.length) {
    encuestas.splice(indice, 1);
    return true;
  }
  return false;
}

module.exports = {eliminarEncuesta};
