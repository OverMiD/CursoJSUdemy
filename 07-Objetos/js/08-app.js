"use strict"; // Habilita que el codigo se cumpla y sea mas estricto con la sintaxis

const producto = {
    nombre: "monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

Object.freeze(producto); // Permite congelar el objeto con el fin de que no se pueda cambiar los valores de sus propiedades o agregar nuevas propiedades al objeto

delete producto.nombre; // Dara error porque el objeto producto se encuentra congelado
producto.disponible = false; // Dara error porque el objeto producto se encuentra congelado

console.log(Object.isFrozen(producto)); // Devuelve true o false dependiendo si el objeto se encuentra congelado o no