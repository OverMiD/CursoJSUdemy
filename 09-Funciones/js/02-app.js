// Declaración de Función ( Function Declaration )
sumar(); // 4
function sumar() {
    console.log(2 + 2);
}


sumar2() // ERROR
// Expresión de funcion ( Function Expression )
const sumar2 = function() {
    console.log(3 + 3)
}

// NOTA: LA DIFERENCIA DE DECLARAR UNA FUNCION ENTRE UNA DECLARATIVA Y UNA EXPRESIVA ES:
// DECLARATIVA: UNA FUNCION DECLARADA DE ESTA FORMA PERMITE QUE PUEDA SER INICIALIZADO O EXISTIR NI BIEN SE EJECUTA EL SCRIPT LO CUAL COMO SE VE EN EL CODIGO PUEDE PERMITIRSE SER LLAMADO ANTES DE SER LLAMADO YA QUE JAVASCRIPT POR DEFECTO LEE Y CREA LAS VARIABLES Y FUNCIONES QUE SON DECLARADAS. ESTO ES GRACIAS AL HOISTING
// EXPRESIVA: UNA FUNCION DECLARA DE ESTA FORMA RECIEN ES CREADA O INICIALIZADA CUANDO SE EJECUTA, POR ESO QUE DA ERROR EN EL EJEMPLO YA QUE COMO ES LLAMADA ANTES DE SER DECLARADA, ENTONCES NO EXISTE.
