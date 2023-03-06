const producto = {
    nombre: "monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

// Un objeto aunque este declarada con const, si puede cambiar los valores de sus propiedades
producto.disponible = false;
console.log(producto.disponible);