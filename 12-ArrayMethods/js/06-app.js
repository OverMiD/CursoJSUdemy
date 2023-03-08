const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

 const resultado = carrito.every( producto => producto.precio < 1000 ); // [array].every --- devuelve true o false si es que todos los item del array cumplen con la condicion
 console.log(resultado); // true

 const resultado2 = carrito.some( producto => producto.precio < 600 ); // [array].some --- devuelve true o false si uno de los items cumple con la condicion
 console.log(resultado2); // false