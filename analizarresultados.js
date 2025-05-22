function analizarResultados(encuestas) {
  return encuestas.map(encuesta => {
    const conteo = encuesta.respuesta.reduce((acc, resp) => {
      acc[resp] = (acc[resp] || 0) + 1;
      return acc;
    }, {});
    
    return {
      pregunta: encuesta.pregunta,
      resultados: conteo
    };
  });
}

module.exports = {analizarResultados};

