function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

Cliente.prototype.tipoCliente = function() {
    let tipo;

    if (this.saldo > 10000) {
        tipo = "Gold";
    } else if (this.saldo > 5000) {
        tipo = "Platinium";
    } else {
        tipo = "Normal";
    }

    return tipo;
}

Cliente.prototype.nombreClienteSaldo = function() {
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo Cliente: ${this.tipoCliente()}`;
}

Cliente.prototype.retiraSaldo = function(retira) {
    this.saldo -= retira;
}

// HERENCIA
function Persona(nombre, saldo, telefono) {
    Cliente.call(this, nombre, saldo); // Con esta linea de codigo se indica que herede los atributos nombre y saldo del objeto Cliente
    this.telefono = telefono;
}

Persona.prototype = Object.create( Cliente.prototype ); // Con esta linea de codigo se indica que se hereden todos los prototypes de Cliente
Persona.prototype.constructor = Cliente; // Con esta linea de codigo se indica que se herede el constructor de Cliente

// Instanciarlo
const jair = new Persona("Jair", 5000, 54354335);
console.log(jair);
console.log(jair.nombreClienteSaldo());