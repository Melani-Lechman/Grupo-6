function agregarEncuesta(encuestas) {
  const prompt = require("prompt-sync")();

  const titulo = prompt("Título de la encuesta: ");
  const pregunta = prompt("Pregunta: ");

  const cantidad = Number(prompt("¿Cuántas opciones?: "));
  if (cantidad < 2) {
    console.log("Mínimo 2 opciones.");
    return;
  }

  const opciones = [];
  for (let i = 0; i < cantidad; i++) {
    const op = prompt("Opción " + (i + 1) + ": ");
    opciones.push(op);
  }

  if (!opciones.every(op => op !== "")) {
    console.log("No se permiten opciones vacías.");
    return;
  }

  const encuesta = {
    titulo: titulo,
    pregunta: pregunta,
    opciones: opciones,
    respuestas: Array(cantidad).fill(0),
  };

  encuestas.push(encuesta);
  console.log("Encuesta agregada.");
}

module.exports = { agregarEncuesta };
