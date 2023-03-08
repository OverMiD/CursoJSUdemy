const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", (e) => {
    e.preventDefault(); // Previene la accion que realiza por defecto el elemento 
    console.log(e);
    console.log(e.target.method); // Devuelve el metodo que ejecuta el elemento
    console.log(e.target.action); // Devuelve la acción que realiza el elemento, en este caso es la url a donde deriva
});

function validarFormulario(e) {
    e.preventDefault();
    console.log(e);
}

formulario.addEventListener("submit", validarFormulario); // Tambien se puede declarar de esta forma, ya teniendo una funcion declarativa en vez de una funcion anonima