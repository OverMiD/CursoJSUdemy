for (let i = 0; i < 10; i++) {
    if (i === 5){
        console.log("Este es el 5");
        break; // Detiene completamente el for loop
    }
    console.log(`Numero: ${i}`); 
}

for (let i = 0; i < 10; i++) {
    if (i === 5){
        console.log("Este es el 5");
        continue; // Corta hasta este punto la ejecucion para volver a indicar que siga iterando
    }
    console.log(`Numero: ${i}`); // Osea este fragmento de código ya no se ejecutaría
}

const carrito = [
    { nombre: "Monitor 27 pulgadas", precio: 500 },
    { nombre: "Television", precio: 100 },
    { nombre: "Tablet", precio: 200, descuento: true },
    { nombre: "Audifonos", precio: 300 },
    { nombre: "Teclado", precio: 400 },
    { nombre: "Mouse", precio: 700 }
]

for (let i = 0; i > carrito.length; i++) {
    if (carrito[i].descuento){
        console.log(`El articulo ${carrito[i].nombre} tiene descuento`);
        continue;
    }
    console.log(carrito[i].nombre);
}