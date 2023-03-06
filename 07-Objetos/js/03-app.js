const producto = {
    nombre: "monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

// Agregar nuevas propiedades al objeto
producto.imagen = "imagen.jpg";
console.log(producto.imagen);

// Eliminar una propiedad del objeto
delete producto.disponible;
console.log(producto);