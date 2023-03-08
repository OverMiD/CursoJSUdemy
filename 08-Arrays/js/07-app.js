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

carrito = [producto, producto2, producto3];
console.table(carrito);

// Eliminar elementos de un arreglo...
carrito.pop(); // pop() -- Elimina el ultimo elemento de un array
console.table(carrito);

carrito.shift(); // shift() -- Elimina el primer elemento de un array
console.table(table);

carrito.splice(1, 1); // splice() -- Elimina X cantidad de elementos dentro de un array. Esta funcion recibe dos parametros, la primera es para indicar en que posicion iniciará y la segunda es cuantas posiciones eliminará.
console.table(carrito);