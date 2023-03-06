const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

let total = 0;
carrito.forEach( producto => total += producto.precio );
console.log(total); // 2100

// Con reduce
let resultado = carrito.reduce((total, producto) => total + producto, 0) // Se le asignan dos parametros los cuales cumplen la funcion del valor inicial + el valor que se ira sumando
console.log(resultado); // 2100