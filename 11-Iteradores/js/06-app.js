// ForEach

const pendientes = ["Tarea", "Comer", "Proyecto", "Estudiar", "Javascript"];

pendientes.forEach( pendiente => console.log(pendiente) );

pendientes.forEach( (pendiente, index) => {
    console.log(`${index} : ${pendiente}`);
});

const nuevoArreglo = pendientes.forEach( pendiente => console.log(pendiente) );
const nuevoArreglo2 = pendientes.map( pendiente => console.log(pendiente) );

console.log(nuevoArreglo);
console.log(nuevoArreglo2);