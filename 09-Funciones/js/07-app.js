// COMUNICACION DE FUNCIONES

iniciarApp();

function iniciarApp() {
    console.log("Iniciando app...");
    segundaFuncion();
}

function segundaFuncion() {
    console.log("Desde la segunda funcion");
    usuarioAutenticado("Jair");
}

function usuarioAutenticado(usuario) {
    console.log("Autenticando usuario... espere...");
    console.log(`${usuario} autenticado exitosamente`);
}