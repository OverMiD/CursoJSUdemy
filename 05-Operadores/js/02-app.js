const num1 = 20;
const num2 = "20";
const num3 = 30;

// Revisar si dos numeros son iguales
console.log(num1 == num3);
console.log(num1 == num2); // Esta comparacion no es estricta y solo se fija en el valor y no en el tipo de dato

// Comparador estricto
console.log(num1 === num3) // Este si se fija en el valor y el tipo de dato
console.log(typeof(num1)); // typeof() -- devuelve el tipo de dato de un valor
console.log(typeof(num2));
console.log(num1 === parseInt(num2)) // parseInt() -- convierte un string a integers 

// Comparador diferente
const pass1 = "admin";
const pass2 = "Admin";

console.log(pass1 != pass2); // true
console.log(num1 != num2); // false -- porque es un comparador no estricto
console.log(num1 !== num2); // true -- porque de igual manera que arriba, se usa un comparador estricto