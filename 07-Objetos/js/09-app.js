"use strict";

const producto = {
    nombre: "monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

Object.seal(producto); // Sella el objeto lo cual permite poder cambiar los valores de las propiedades ya existentes pero no permite agregar nuevas propiedades

producto.nombre = "imagen.jpg";
console.log(producto.nombre);
console.log(Object.isSealed(producto)); // Devuelve true o false dependiendo si el objeto se encuentra sellado o no