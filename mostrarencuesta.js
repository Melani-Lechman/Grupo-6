function mostrarEncuestas(lista) {
  lista.forEach((encuesta, index) => {
    const opcionesFormateadas = encuesta.opciones.map((op, i) => `${i + 1}) ${op}`).join(" - ");
    console.log(`Encuesta ${index + 1}: ${encuesta.pregunta}`);
    console.log(`Opciones: ${opcionesFormateadas}`);
  });
}

module.exports = {mostrarEncuestas};
