// Inicializar una variable con un valor
var producto = "monitor de 24 pulgadas";
console.log(producto);
// Las variables se pueden reasignar
producto = "monitor de 19 pulgadas";
console.log(producto);
// Javascript es un lenguaje dinamico, no especifica tipo de dato
producto = 20
console.log(producto);

// Se puede inicializar sin valor y asignarlo despues
var disponible;
disponible = true;
disponible = false;

// Inicializar multiples variables
var categoria = "computadoras",
    marca = "marca famosa",
    calificacion = 5;

// No se puede inicializar variables que empiecen con numeros
// var 99dias; //marcar error
// var dias99; //no marca error porque no inicia con numeros

// Convenciones para crear variables
var nombreProducto //camelcase
var nombre_producto //snake
var NombreProducto //pascalcase -- usada mas en clases