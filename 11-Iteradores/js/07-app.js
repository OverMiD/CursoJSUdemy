const pendientes = ["Tarea", "Comer", "Proyecto", "Estudiar", "Javascript"];

const carrito = [
    { nombre: "Monitor 27 pulgadas", precio: 500 },
    { nombre: "Television", precio: 100 },
    { nombre: "Tablet", precio: 200 },
    { nombre: "Audifonos", precio: 300 },
    { nombre: "Teclado", precio: 400 },
    { nombre: "Mouse", precio: 700 }
]

for (let pendiente of pendientes) {
    console.log(pendiente);
}

for (producto of carrito) {
    console.log(`El producto ${producto.nombre} tiene un precio de ${producto.precio}`);
}