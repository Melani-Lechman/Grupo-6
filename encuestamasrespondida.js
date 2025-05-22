function preguntasMasRespondidas(encuestas) {
  const ordenadas = [...encuestas].sort((a, b) => b.respuesta.length - a.respuesta.length);
  return ordenadas.map(e => e.pregunta);
}

module.exports = {preguntasMasRespondidas};

