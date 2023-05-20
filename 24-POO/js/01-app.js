class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre}, tu saldo es de: ${this.saldo}`;
    }

    static bienvenida() { // Se le coloca static al metodo de una clase que no va requerir instancia de un objeto
        return `Te damos la bienvenida`;
    }
}

const jair = new Cliente("Jair", 900);
console.log(jair);
console.log(jair.mostrarInformacion());
console.log(Cliente.bienvenida()); // Para hacer referencia al metodo static se llama directamente por el nombre de la clase y no la del objeto




const Cliente2 = class {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }
}

const joseph = new Cliente2("Joseph", 500);
console.log(joseph);