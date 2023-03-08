const numeros = [10, 20, 30, 40, 50, [1, 2, 3]];
console.log(numeros);
console.table(numeros); // Forma para poder ver en una tabla el array

// Acceder al array
console.log(numeros[2]);
console.log(numeros[0]);
console.log(numeros[20]); // Si colocas una posicion inexistente, entonces marcara como undefined
console.log(numeros[5][1]); // Forma de acceder al array que esta dentro de otro array