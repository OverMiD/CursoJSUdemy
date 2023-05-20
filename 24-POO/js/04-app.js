class Cliente {
    #nombre; // Forma de declarar una variable privada dentro de una clase

    setNombre(nombre) {
        this.#nombre = nombre;
    }

    getNombre() {
        return this.#nombre;
    }
}

const jair = new Cliente();
jair.setNombre("Jair");
console.log(jair.getNombre());