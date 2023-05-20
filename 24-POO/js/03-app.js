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

// Herencia

class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, categoria) {
        super(nombre, saldo); // super() --- se utiliza para hacer referencia a los atributos de la clase padre
        this.telefono = telefono;
        this.categoria = categoria;
    }

    static bienvenida() { // de esta forma se puede reescribir un metodo de la clase padre
        return `Te damos la bienvenida a empresas`;
    }
}

const jair = new Cliente("Jair", 900);
const empresas = new Empresa("Lentel", 500, 0543543,"Telecomunicaciones");
console.log(empresas);
console.log(empresas.mostrarInformacion());
console.log(Empresa.bienvenida());