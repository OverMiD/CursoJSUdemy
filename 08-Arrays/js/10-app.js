const carrito = [
    { nombre: "Monitor 27 pulgadas", precio: 500},
    { nombre: "Teclado", precio: 50},
    { nombre: "Mouse", precio: 100},
    { nombre: "Laptop", precio: 100},
    { nombre: "Audifonos", precio: 50},
    { nombre: "Celular", precio: 1200},
]


// LA FORMA DE IMPLEMENTACION DE FOREACH Y MAP SON LA MISMA Y DEVUELVEN EL MISMO RESULTADO
carrito.forEach( function(producto) { 
    console.log(`Nombre: ${producto.nombre} - Precio: ${producto.precio}`);
});

carrito.map( function(producto) { 
    console.log(`Nombre: ${producto.nombre} - Precio: ${producto.precio}`);
});


// LA DIFERENCIA ENTRE MAP Y FOREACH ES QUE MAP PUEDE CREAR UNA NUEVA VARIABLE Y FOREACH NO
const nuevoArreglo = carrito.forEach( function(producto) { 
    return `Nombre: ${producto.nombre} - Precio: ${producto.precio}`;
});

const nuevoArreglo2 = carrito.map( function(producto) { 
    return `Nombre: ${producto.nombre} - Precio: ${producto.precio}`;
});

console.log(nuevoArreglo); // Devuelve el array completo extraido de carrito
console.log(nuevoArreglo2); // No devuelve nada