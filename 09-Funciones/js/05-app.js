function sumar(a, b) { // a y b son parametros
    console.log(a + b);
}

sumar(2, 3); // 2 y 3 son argumentos
sumar(200, 284); // 484


function saludar(nombre, apellido) {
    console.log(`Hola ${nombre} ${apellido}`);
}

saludar("Jair", "Ortega"); // Hola Jair Ortega
saludar("Jair"); // Hola Jair undefined
saludar(); // Hola undefined undefined