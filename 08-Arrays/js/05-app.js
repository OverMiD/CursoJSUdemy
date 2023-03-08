const meses = ["Enero", "Febrero", "Marzo"];
console.table(meses);

// Agregar al final del array
meses.push("Abril"); // push() -- Permite agregar un item al final del array sin conocer su tamaño
meses.push("Mayo");

const carrito = [];

// Definir un producto
const producto = {
    nombre: "Monitor 32 pulgadas",
    precio: 400
}

carrito.push(producto);
console.table(carrito);

const producto2 = {
    nombre: "celular",
    precio: 200
}

carrito.push(producto);
console.table(carrito);

const producto3 = {
    nombre: "Teclado",
    precio: 50
}

carrito.unshift(producto3); // unshift() -- Permite agregar un item al inicio del array