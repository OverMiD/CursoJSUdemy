document.addEventListener("DOMContentLoaded", function() {

    const email = {
        email: "",
        copia: "",
        asunto: "",
        mensaje: ""
    }

    // Seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector("#email");
    const inputCopia = document.querySelector("#copia")
    const inputAsunto = document.querySelector("#asunto");
    const inputMensaje = document.querySelector("#mensaje");
    const formulario = document.querySelector("#formulario");
    const btnSubmit = document.querySelector('#formulario button[type="submit"]');
    const btnReset = document.querySelector('#formulario button[type="reset"]');
    const spinner = document.querySelector("#spinner");

    // Asignar eventos
    inputEmail.addEventListener("blur", validar); // aqui solo se coloca el nombre de la funcion ya que si se le coloca parentesis esto hace que la funcion se ejecuta inmediatamente
    inputCopia.addEventListener("blur", validar);
    inputAsunto.addEventListener("blur", validar);
    inputMensaje.addEventListener("blur", validar);

    formulario.addEventListener("submit", enviarEmail);

    btnReset.addEventListener("click", function(e) {
        e.preventDefault();

        // Reiniciar el objeto
        resetFormulario();
    });

    function enviarEmail() {
        e.preventDefault();

        console.log(spinner);

        spinner.classList.add("flex");
        spinner.classList.remove("hidden");

        setTimeout(() => {
            spinner.classList.remove("flex");
            spinner.classList.add("hidden");

            // Reiniciar el objeto
            resetFormulario();

            // Crear una alerta
            const alertaExito = document.createElement("P");
            alertaExito.classList.add("bg-green-500", "text-white", "p-2", "text-center", "rounded-lg", "mt-10", "font-bold", "text-sm", "uppercase");
            alertaExito.textContent = "Mensaje enviado correctamente!";

            formulario.appendChild(alertaExito);

            setTimeout(() => {
                alertaExito.remove();
            }, 3000);
        }, 3000);
    }

    function validar(e) {

        if (e.target.value.trim() === ""){
            if (e.target.id === "copia") {
                limpiarAlerta(e.target.parentElement);
                email[e.target.name] = "";
                comprobarEmail();
                return;
            }

            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
            email[e.target.name] = e.target.value.trim().toLowerCase();
            comprobarEmail();
            return;
        }

        if (e.target.id === "email" || e.target.id === "copia") {
            if (validarEmail(e.target.value)) {
                limpiarAlerta(e.target.parentElement);
                // Asignar los valores
                email[e.target.name] = e.target.value.trim().toLowerCase();
                // Comprobar el objeto email
                comprobarEmail();
                return;
            } else {
                mostrarAlerta("El email no es valido", e.target.parentElement);
                email[e.target.name] = e.target.value.trim().toLowerCase();
                comprobarEmail();
                return;
            }
        }

        limpiarAlerta(e.target.parentElement);
        email[e.target.name] = e.target.value.trim().toLowerCase();
        comprobarEmail();
    }

    function mostrarAlerta(mensaje, referencia) {
        // Comprueba si ya existe una alerta
        limpiarAlerta(referencia);

        // Generar alerta en HTML
        const error = document.createElement("P");
        error.textContent = mensaje;
        error.classList.add("bg-red-600", "text-white", "p-2", "text-center")

        // Inyectar el error al formulario
        referencia.appendChild(error);
    }

    function limpiarAlerta(referencia) {
        // Comprueba si ya existe una alerta
        const alerta = referencia.querySelector(".bg-red-600");
        if (alerta) {
            alerta.remove();
        }
    }

    function validarEmail(email) {
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
        const resultado = regex.test(email);
        return resultado;
    }

    function comprobarEmail() {
        if (email.email.trim() === "" || email.asunto.trim() === "" || email.mensaje.trim() === "") {
            btnSubmit.classList.add("opacity-50");
            btnSubmit.disabled = true;
            return;
        }

        btnSubmit.classList.remove("opacity-50");
        btnSubmit.disabled = false;
    }

    function resetFormulario() {
        email.email = "";
        email.asunto = "";
        email.mensaje = "";

        formulario.reset();

        comprobarEmail();
    }
});