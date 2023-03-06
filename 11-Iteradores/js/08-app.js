// UN LET IN PERMITE PODER ITERAR ENTRE UN OBJETO

const automovil = {
    modelo: "Camaro",
    year: 1969,
    motor: "6.0"
}

for (let auto in automovil) { // Devuelve los nombres de las propiedades de un objeto
    console.log(auto);
}

for (let auto in automovil) { // Devuelve los valores de las propiedades de un objeto
    console.log(`${automovil[auto]}`);
}


for (let [llave, valor] of Object.entries(automovil)){ // Otra forma de iterar sobre objetos, esto desde ENMASCRIPT 7
    console.log(valor);
    console.log(llave);
}