const producto = "Monitor 20 ";
const precio = "30 USD"

// concat() -- Concatea un texto a la variable seleccionada
console.log(producto.concat(precio));

// Otras formas habituales de concatenar textos
console.log(producto + "con un precio de: " + precio);
console.log(`${producto} con un precio de: ${precio}`); // Template string
console.log(producto, "con un precio de", precio)