const carrito = [];

const producto = {
    nombre: "Monitor 32 pulgadas",
    precio: 400
}

const producto2 = {
    nombre: "celular",
    precio: 200
}

const producto3 = {
    nombre: "Teclado",
    precio: 50
}

// EXISTEN DOS FORMAS DE REALIZAR ALGO EN JS
// IMPERATIVA: BASICAMENTE REALIZA CAMBIOS SOBRE EL OBJETO AL QUE SE HACE REFERENCIA
// DECLARATIVA: HACE UNA COPIA SOBRE EL OBJETO AL QUE SE HACE REFERENCIA Y REALIZA CAMBIOS SOBRE ESA COPIA

let resultado;
resultado = [...carrito, producto]; // Forma declarativa de agregar un array a un nuevo array
resultado = [...resultado, producto2];
resultado = [producto3, ...resultado];

console.table(resultado);