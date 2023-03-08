// VALORES RETORNADOS DE LAS FUNCIONES

function sumar(a, b) {
    return a + b;
}
const resultado = sumar(2, 3); 
console.log(resultado); // 5

// EJEMPLO MAS AVANZADO
let total = 0;
function agregarCarrito(precio) {
    return total += precio;
}

function calcularImpuesto(total) {
    return total * 1.15;
}

total = agregarCarrito(300); // total = 300
total = agregarCarrito(100); // total = 400
total = agregarCarrito(600); // total = 1000

const totalPagar = calcularImpuesto(total);

console.log(`El total a pagar es de ${totalPagar}`); //1150

console.log(total); // 1000