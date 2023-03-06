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

// Un objeto puede tener otro objetos dentro de ella y se puede acceder a travez de puntos para ir profundizando en el objeto
console.log(producto.informacion.medida);