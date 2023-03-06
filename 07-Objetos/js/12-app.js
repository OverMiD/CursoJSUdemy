// Object literal
const producto = { // Este es el metodo mas conocido para crear objetos
    nombre: "monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

// Object constructor
function Producto(nombre, precio){ // Esta forma crea objetos de forma mas dinamica desde una funcion
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
    this.hola = "Bienvenido"
}

const producto2 = new Producto("Televisor", 200);
console.log(producto2);