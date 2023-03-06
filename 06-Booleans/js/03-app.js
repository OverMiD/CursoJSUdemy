const autenticado = true;

// NO ES NECESARIO SER TAN EXPLICITO
// if (autenticado === true) 
//     console.log("Si puedes ver netflix");
// else
//     console.log("No puedes ver netflix");

// ESTA ES LA MEJOR FORMA
if (autenticado)
    console.log("Si puedes ver netflix");
else
    console.log("No puedes ver netflix");

// Operador ternario
console.log(autenticado?"Si puedes ver netflix":"No puedes ver netflix");