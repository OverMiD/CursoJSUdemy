const autenticado = true;
const puedePagar = true;
console.log( autenticado ? (puedePagar ? "Si esta autenticado y puede pagar" : "Si esta autenticado pero no puede pagar") : "No esta autenticado" );


const efectivo = 800;
const credito = 400;
const disponible = efectivo + credito;
const totalPagar = 600;

if (efectivo > totalPagar || credito > totalPagar || disponible > totalPagar){
    if (efectivo > totalPagar)
        console.log("Si podemos pagar");
    else
        console.log("Otra forma de pago");
}
else
    console.log("Fondos insuficientes");