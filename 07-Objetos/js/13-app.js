const producto = {
    nombre: "monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

console.log(Object.keys(producto)); // Retorna el nombre de las propiedades del objeto

console.log(Object.values(producto)); // Retorna todos los valores de las propiedades del objeto

console.log(Object.entries(producto)); // Retorna un array de dos items (nombre propiedad y valor propiedad) por cada propiedad que exista dentro del objeto