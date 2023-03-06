const producto = {
    nombre: "monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

const medidas = {
    peso: "1kg",
    medida: "1m"
}

const resultado = Object.assign(producto, medidas); // Permite unir dos objetos en una nueva variable

// Spread Operator o Rest Operator
const resultado2 = { ...producto, ...medidas }; // Este metodo es mas usado

console.log(resultado2);