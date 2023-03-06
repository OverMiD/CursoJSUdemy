const producto = "Monitor 20 pulgadas ";

// repeat() -- Repite un texto la cantidad de veces que se le haya indicado
const oferta = "en promocion".repeat(3);
console.log(oferta);

oferta.repeat(2.4); // Javascript redondea el valor indicado en caso sea decimal

// split() -- Busca dentro de un string el caracter colocado y lo divide en varias cadenas. Su salida es un array
const actividad = "Estoy aprendiendo javascript moderno";
console.log(actividad.split(" "));

const hobbies = "Leer, caminar, escuchar musica, escribir, aprender a programar";
console.log(hobbies.split(","));