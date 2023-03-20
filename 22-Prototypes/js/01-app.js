// Forma estatica de crear objetos
const cliente = { 
    nombre: "Juan",
    saldo: 500
}

console.log(cliente);

// Forma dinamica de crear objetos
function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const jair = new Cliente("Jair", 500);

console.log(jair);