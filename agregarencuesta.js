// Esta función agrega una nueva encuesta a la lista, verificando que todas las opciones estén completas
function agregarEncuesta(encuestas) {
  const prompt = require("prompt-sync")(); // Para ingresar datos por consola

  const pregunta = prompt("Pregunta de la encuesta: ");
  const cantidad = Number(prompt("¿Cuántas opciones? (mínimo 2): "));

  // Si hay menos de 2 opciones, no se permite continuar
  if (cantidad < 2) {
    console.log("Debe haber al menos 2 opciones.");
    return;
  }

  // Pedimos al usuario las opciones
  const opciones = [];
  for (let i = 0; i < cantidad; i++) {
    const opcion = prompt(`Opción ${i + 1}: `);
    opciones.push(opcion);
  }

  // Verificamos que ninguna opción esté vacía
  if (!opciones.every(op => op.trim() !== "")) {
    console.log("No se permiten opciones vacías.");
    return;
  }

  // Creamos la encuesta y la agregamos al array
  encuestas.push({
    pregunta: pregunta,
    opciones: opciones,
    respuesta: [] // Acá se guardarán las respuestas que dé el usuario
  });

  console.log("Encuesta agregada exitosamente.");
}

// Exportamos la función para poder usarla en otros archivos
module.exports = { agregarEncuesta };

