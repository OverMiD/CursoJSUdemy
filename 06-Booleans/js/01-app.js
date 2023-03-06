const bool1 = true;
const bool2 = false;
const bool3 = "true";

console.log(bool1); // true
console.log(bool2); // false

console.log(typeof bool1); // boolean

console.log(bool1 == bool3); // false

//NOTA: Esto crea el objeto y no el tipo de dato
const bool4 = new Boolean(true); 
console.log(bool4); // true
console.log(typeof bool4); // object