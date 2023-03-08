const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// con un foreach
let resultado = "";
carrito.forEach((producto, index) => {
    if(producto.nombre === "Tablet")
        resultado = carrito[index];
})

console.log(resultado);

// con un .find
let resultado2 = carrito.find(producto => producto.nombre === "Tablet"); // [array].find --- permite encontrar un item en base a una condicion, tener en cuenta que siempre retorna el primer item que cumpla con la condicion indicada
console.log(resultado2);