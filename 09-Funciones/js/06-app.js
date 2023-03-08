function saludar(nombre = "desconocido", apellido = "No tiene apellido") { // Asi es como se asigna un valor por defecto en los parametros
    console.log(`Hola ${nombre} ${apellido}`);
}

saludar("Jair", "Ortega"); // Hola Jair Ortega
saludar("Jair"); // Hola Jair No tiene apellido
saludar(); // Hola desconocido No tiene apellido

// NOTA: CUANDO SE LLAMA A LA FUNCION Y NO SE LE ENVIA ALGUNOS DE LOS ARGUMENTOS, ESTE TOMA EL VALOR POR DEFECTO QUE SE LE ASIGNO DENTRO DE LOS PARAMETROS