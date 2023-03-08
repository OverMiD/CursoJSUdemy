const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

// Destructuracion de objetos
const { nombre, precio, disponible } = producto;
console.log(nombre, precio, disponible);

// Destructuracion de arrays
const numeros = [10, 20, 30, 40, 50];
const [primero, segunda, tres] = numeros; // En los arrays tu le puedes asignar el nombre de la variable pero recordar que siempre cada variable que coloques se asigna por defecto el valor de la posicion en el array que le toca
console.log(primero) // 10
console.log(tres); // 30

const [ , , tercero ] = numeros; // De esta forma se puede crear y obtener el valor de una variable desde un array sin tener que crear variables que no se van a usar
console.log(tercero); // 30

const [ , , , , quinto ] = numeros;
console.log(quinto); // 50

const [ uno, dos, ...triki ] = numeros; // Agregando el ...[nombreVariable] dentro de la destructuracion del array, logras que pueads colocar dentro de otro array los elementos que falten definir dentro de la destructuracion
console.log(triki); // [30, 40, 50]
