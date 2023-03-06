const producto = "                 Monitor 20                    ";

// Cuenta los espacios como parte del string
console.log(producto.length);

// trimStart() -- Limpia los espacios en blanco que existen al inicio de un string
console.log(producto.trimStart());

// trimEnd() -- Limpia los espacios en blanco que existen al final del un string
console.log(producto.trimEnd());

// trim() -- Limpia los espacios en blanco que existen al inicio o al final de un string
console.log(producto.trim())

// Existe una forma encadenada de ejecutar un metodo seguido del otro, se le conoce como chaining
console.log(producto.trimStart().trimEnd());