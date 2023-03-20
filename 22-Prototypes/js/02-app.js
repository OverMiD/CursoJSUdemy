// Forma dinamica de crear objetos
function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const jair = new Cliente("Jair", 500);

function formatearCliente(cliente) {
    const { nombre, saldo } = cliente;
    return `El cliente ${nombre} tiene un saldo de ${saldo}`;
}

function formatearEmpresa(empresa) {
    const { nombre, saldo, categoria } = empresa;
    return `El cliente ${nombre} tiene un saldo de ${saldo} y pertenece a la categoría ${categoria}`;
}

console.log( formatearCliente(jair) );

function Empresa(nombre, saldo, categoria) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

const CCJ = new Empresa("Código con Jair", 4000, "Cursos en línea");
console.log( formatearEmpresa(CCJ) );