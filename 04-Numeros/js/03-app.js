let resultado;

// Usando Math

// PI -- Devuelve el valor de PI
resultado = Math.PI;

// roun() -- Redondea el valor decimal que coloques dentro de los parentesis
resultado = Math.round(2.8);

// ceil() -- Redondea siempre hacia arriba
resultado = Math.ceil(2.1);

// floor() -- Redondea siempre hacia abajo
resultado = Math.floor(1.9);

// sqrt() -- Devuelve la raiz cuadrada del valor dentro de los parentesis
resultado = Math.sqrt(54354353)

// abs() -- Devuelve el valor absoluto
resultado = Math.abs(-500); // resultado = 500

// pow() -- Devuelve el resultado de la potencia
resultado = Math.pow(8, 3);

// min() -- Devuelve el valor minimo dentro de la serie de numeros que se encuentre como input
resultado = Math.min(1, 2, 3, 4, 5, 6, 7, 8, 40);

// max() -- Devuelve el valor maximo dentro de la serie de numeros que se encuentre como input
resultado = Math.max(1, 2, 3, 4, 6 , 20);

// random() -- Devuelve un numero aleatorio // Rara vez devuelve un entero
resultado = Math.random();

// Usar floor y random para obtener numeros enteros aleatorios
resultado = Math.floor(Math.random * 30);

console.log(resultado);