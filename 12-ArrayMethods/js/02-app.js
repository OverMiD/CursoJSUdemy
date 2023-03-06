const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

meses.forEach((mes, i) => {
    if(mes === "Febrero")
        console.log(`Elemento encontrado en el index ${i}`);
});


// Encontrar el indice de abril
const indice = meses.findIndex( mes => mes === "Abril");
console.log(indice); // Retorna el indice del valor indicado, en caso de que no lo encuentre retorna un -1

const indice2 = carrito.findIndex( producto => producto.nombre === "Celular");
console.log(indice2);