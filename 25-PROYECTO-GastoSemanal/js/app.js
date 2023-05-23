// Variables y Selectores
const formulario = document.querySelector("#agregar-gasto");
const gastoListado = document.querySelector("#gastos ul");
let presupuesto;

// Eventos
eventListeners();
function eventListeners() {
    document.addEventListener("DOMContentLoaded", preguntarPresupuesto);
    formulario.addEventListener("submit", agregarGasto);
}



// Clases
class Presupuesto {
    constructor(presupuesto) {
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }

    nuevoGasto(gasto) {
        this.gastos = [ ...this.gastos, gasto ];
        this.calcularRestante();
    }

    calcularRestante() {
        const gastado = this.gastos.reduce( ( total, gasto ) => total + gasto.cantidad, 0);
        this.restante = this.presupuesto - gastado;
    }

    eliminarGasto(id) {
        this.gastos = this.gastos.filter(gasto => gasto.id !== id);
        this.calcularRestante();
    }
}

class UI {
    insertarPresupuesto(objPresupuesto) {
        const {presupuesto, restante} = objPresupuesto;
        document.querySelector("#total").textContent = presupuesto;
        document.querySelector("#restante").textContent = restante;
    }

    imprimirAlerta(mensaje, tipo) {

        // Crear el elemento div
        const divMensaje = document.createElement("div");
        divMensaje.classList.add("text-center", "alert");

        // Agregar el estilo dependiendo del tipo de alerta
        if(tipo === "error")
            divMensaje.classList.add("alert-danger");
        else
            divMensaje.classList.add("alert-success");

        // Agregar el mensaje al div
        divMensaje.textContent = mensaje;

        // Insertar el elemento crearo al HTML
        document.querySelector(".primario").insertBefore(divMensaje, formulario);

        // Eliminar el elemento insertado del HTML
        setTimeout(() => {
            divMensaje.remove();
        }, 3000);
    }

    limpiarHTML() {
        while(gastoListado.firstChild) {
            gastoListado.removeChild(gastoListado.firstChild);
        }
    }

    agregarGastosListado(gastos) {
        // Limpiar el HTML
        this.limpiarHTML();

        // Iterar sobre los gastos
        gastos.forEach(gasto => {
            const {cantidad, nombre, id} = gasto;

            // Crear LI
            const nuevoGasto = document.createElement("li");
            nuevoGasto.className = "list-group-item d-flex justify-content-between align-items-center";
            nuevoGasto.dataset.id = id;

            // Agregar el HTML del gasto
            nuevoGasto.innerHTML = `${nombre} <span class="badge badge-primary badge-pill">$ ${cantidad} </span>`;

            // Agregar el boton borrar
            const btnBorrar = document.createElement("button");
            btnBorrar.classList.add("btn", "btn-danger", "borrar-gasto");
            btnBorrar.innerHTML = "Borrar &times;";
            btnBorrar.onclick = () => {
                eliminarGasto(id);
            }
            nuevoGasto.appendChild(btnBorrar);

            // Agregar al HTML
            gastoListado.appendChild(nuevoGasto);
        });
    }

    actualizarRestante(restante) {
        document.querySelector("#restante").textContent = restante;
    }

    comprobarPresupuesto(objPresupuesto) {
        const { presupuesto, restante } = objPresupuesto;
        const restanteDiv = document.querySelector(".restante");

        // Comprobar el 75%
        if((presupuesto / 4) > restante) {
            restanteDiv.classList.remove("alert-success", "alert-warning");
            restanteDiv.classList.add("alert-danger"); 
        }
        else if((presupuesto / 2) > restante) {
            restanteDiv.classList.remove("alert-success");
            restanteDiv.classList.add("alert-warning"); 
        }
        else {
            restanteDiv.classList.remove("alert-danger", "alert-warning");
            restanteDiv.classList.add("alert-success");
        }

        // Si el total se acabo
        if(restante <= 0) {
            ui.imprimirAlerta("El presupuesto se ha agotado", "error");
            formulario.querySelector('button[type="submit"]').disabled = true;
        }
    }
}

// Instanciar clases
const ui = new UI();


// Funciones
function preguntarPresupuesto() {
    const presupuestoUusario = prompt("Cual es tu presupuesto?");
    console.log(presupuestoUusario);

    if(presupuestoUusario === "" || presupuestoUusario === null || isNaN(presupuestoUusario) || presupuestoUusario <= 0)
        window.location.reload();

    presupuesto = new Presupuesto(presupuestoUusario);
    ui.insertarPresupuesto(presupuesto);
}

function agregarGasto(e) {
    // Previene el evento por defecto
    e.preventDefault();

    // Seleccionamos los valores de las inputs
    const nombre = document.querySelector("#gasto").value;
    const cantidad = Number(document.querySelector("#cantidad").value);

    // Validamos que los inputs tengan valores y que los valores sean correctos
    if(nombre === "" || cantidad === "") {
        ui.imprimirAlerta("Ambos campos son obligatorios", "error");
        return;
    }
    else if (cantidad <= 0 || isNaN(cantidad)) {
        ui.imprimirAlerta("Cantidad no valida", "error");
        return;
    }

    // Creamos el objeto gasto con los valores de las inputs y un id
    const gasto = {nombre, cantidad, id: Date.now()};

    // Insertamos en el array de gastos el nuevo gasto
    presupuesto.nuevoGasto(gasto);

    // Imprimimos el mensaje de exito
    ui.imprimirAlerta("Gasto agregado correctamente");

    // Agregar al listado de gastos
    const { gastos, restante } = presupuesto;
    ui.agregarGastosListado(gastos);
    ui.actualizarRestante(restante);
    ui.comprobarPresupuesto(presupuesto);

    // Reiniciamos el formulario
    formulario.reset();
}

function eliminarGasto(id) {
    const { gastos, restante } = presupuesto;
    presupuesto.eliminarGasto(id);
    ui.agregarGastosListado(gastos);
    ui.actualizarRestante(restante);
    ui.comprobarPresupuesto(presupuesto);
} 