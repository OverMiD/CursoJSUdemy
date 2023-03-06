const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]


// Comprobar si un valor existe en un arreglo
meses.forEach((mes) => {
    if (mes === "Enero")
        console.log("Enero si existe");
})

const resultado = meses.includes("Enero"); // [array].includes -- Devuelve true o false si existe el valor indicado dentro del array
console.log(resultado); // true

const existe = carrito.some( producto => { // [objeto].some -- Devuelve true o false si el valor existe dentro del objeto
    return producto.nombre === "Teclado";
});

console.log(existe); // true

// Usando some en un array
const existe2 = meses.some( mes => mes === "Diciembre");
console.log(existe2); // false