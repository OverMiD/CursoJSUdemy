const autenticado = true;
if (autenticado)
    console.log("El usuario esta autenticado");


const puntaje = 500;

function RevisarPuntaje(puntaje) {
    if (puntaje > 400){
        console.log("Buen puntaje... felicidades");
        return;
    }
    if (puntaje > 300){
        console.log("Excelente");
        return;
    }
}
