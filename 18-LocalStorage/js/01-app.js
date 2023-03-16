// Creando valores en el localStorage
localStorage.setItem("nombre", "Jair"); // localStorage permite guardar valores (key, value) dentro del navegador y esto persiste por mas que cierres la pc o el navegador
sessionStorage.setItem("apellido", "Ortega"); // sessionStorage permite guardar valores (key, value) dentro del navegador y su persistencia es hasta que el navegador se cierre

const producto = {
    nombre: "Televisor 24 pulgadas",
    precio: 300
}

// En el localStorage solo puedes guardar valores string por ende si se quiere guardar un objeto o un array primero se tiene que convertir en string utilizando el metodo JSON.stringify()
const productoString = JSON.stringify(producto);
localStorage.setItem("producto", productoString);

const meses = ["Enero", "Febrero", "Marzo"];
localStorage.setItem("meses", JSON.stringify(meses));