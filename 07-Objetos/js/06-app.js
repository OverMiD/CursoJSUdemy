const producto = {
    nombre: "monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    informacion: {
        peso: "1kg",
        medida: "1m",
        paises: {
            nombre: "españa"
        }
    }
}

// Destructuracion de objetos anidados
const { informacion: { peso }, informacion: { paises: { nombre } } } = producto;
console.log(peso, nombre);