const numero1 = "20";
const numero2 = "20.2";
const numero3 = "Uno";
const numero4 = 20;

console.log(numero1);

// typeof {valor a colocar} -- Devuelve el tipo de dato del valor colocado seguido del typeof
typeof numero1; // string

// Number.parseInt() -- Convierte el valor en numero
console.log(Number.parseInt(numero1)); // 20

// Number.parseFloat() -- Convierte el valor en flotante o decimal
console.log(Number.parseFloat(numero2)); // 20.2

// Number.isInteger() -- Devuelve true o false dependiendo si el numero es un entero
console.log(Number.isInteger(numero1)); // true
console.log(Number.isInteger(numero2)); // false