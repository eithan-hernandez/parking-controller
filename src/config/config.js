const dotenv = require("dotenv");
let result = {};

try {
  result = dotenv.config();
  if (result.error) throw result.error;
  console.log("El archivo .env se cargado correctamente.");
} catch (err) {
  console.log("El archivo .env no se cargo.");
}
