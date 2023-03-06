const producto = "Monitor 20 pulgadas";

console.log(producto);

// replace() -- Reemplaza una(s) cadena(s) dentro de un string por otras cadena(s)
console.log(producto.replace("pulgadas", "\'"));
console.log(producto.replace("Monitor", "Monitor curvo"));

// slice() -- Corta un string desde una posicion origen hasta una posicion final
console.log(producto.slice(0, 10));
console.log(producto.slice(2, 1)); // NOTA: No hace nada

// substring() -- Corta un string desde una posicion origen hasta una posicion final
console.log(producto.substring(0, 10));
console.log(producto.substring(2, 1)); //NOTA: Si identifica que el primer numero es mayor al segundo, invierte los valores

const nombre = "Jair";
console.log(nombre.substring(0, 1));

// Otra forma es usando charAt() -- Muestra un solo caracter dentro de un string que este en la posicion indicada
console.log(nombre.charAt(0));