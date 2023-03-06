const btnFlotante = document.querySelector(".btn-flotante");
const footer = document.querySelector(".footer");

btnFlotante.addEventListener("click", mostrarOcultarFooter);

function mostrarOcultarFooter() {
    if (footer.classList.contains("activo")){
        footer.classList.remove("activo");
        btnFlotante.classList.remove("activo"); // this.classList.remove("activo"); // Tambien se puede usar el this ya quien ejecuto este evento fue la variable que contiene el bobton
        this.textContent = "Idioma y moneda";
    }
    else {
        footer.classList.add("activo");
        btnFlotante.classList.add("activo"); // this.classList.remove("activo"); // Tambien se puede usar el this ya quien ejecuto este evento fue la variable que contiene el bobton
        this.textContent = "X Cerrar";
    }
}