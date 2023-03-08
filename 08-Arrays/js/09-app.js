const carrito = [
    { nombre: "Monitor 27 pulgadas", precio: 500},
    { nombre: "Teclado", precio: 50},
    { nombre: "Mouse", precio: 100},
    { nombre: "Laptop", precio: 100},
    { nombre: "Audifonos", precio: 50},
    { nombre: "Celular", precio: 1200},
]

for(let i = 0; i < carrito.length; i++) {
    console.log(`Nombre: ${carrito[i].nombre} - Precio: ${carrito[i].precio}`);
}

carrito.forEach( function(producto) { // Forma mas usada para recorrer array y tambien ahorra algunas letras de codigo
    console.log(`Nombre: ${producto.nombre} - Precio: ${producto.precio}`);
});