const prompt = require("prompt-sync")();

// Importar funciones desde sus respectivos archivos
const { agregarEncuesta } = require("./agregarencuesta");
const { mostrarEncuestas } = require("./mostrarencuesta");
const { responderEncuesta } = require("./responderencuesta");
const { analizarResultados } = require("./analizarresultados");
const { preguntasMasRespondidas } = require("./encuestamasrespondida");
const { eliminarEncuesta } = require("./eliminarencuesta");

// Lista global de encuestas
let encuestas = [];

function mostrarMenu() {
  let opcion = "";

  while (opcion !== "7") {
    console.log("\n--- Menú Encuestas ---");
    console.log("1: Agregar encuesta");
    console.log("2: Mostrar encuestas");
    console.log("3: Responder encuesta");
    console.log("4: Analizar resultados");
    console.log("5: Encuesta más respondida");
    console.log("6: Eliminar encuesta");
    console.log("7: Salir");

    opcion = prompt("Elegí una opción: ");

    switch (opcion) {
      case "1":
        agregarEncuesta(encuestas);
        break;
      case "2":
        mostrarEncuestas(encuestas);
        break;
      case "3":
        responderEncuesta(encuestas);
        break;
      case "4":
        analizarResultados(encuestas);
        break;
      case "5":
        preguntasMasRespondidas(encuestas);
        break;
      case "6":
        const indice = parseInt(prompt("Índice de la encuesta a eliminar: "));
        if (eliminarEncuesta(encuestas, indice)) {
          console.log("Encuesta eliminada con éxito.");
        } else {
          console.log("Índice inválido.");
        }
        break;
      case "7":
        console.log("Chau!");
        break;
      default:
        console.log("Opción inválida. Intente nuevamente.");
    }
  }
}

// Iniciar el menú
mostrarMenu();
