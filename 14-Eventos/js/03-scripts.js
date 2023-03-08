const busqueda = document.querySelector(".busqueda");

busqueda.addEventListener("keydown", () => { // Evento que se ejecuta cuando se presiona una tecla
    console.log("escribiendo...");
});

busqueda.addEventListener("keyup", () => { // Evento que se ejecuta cuando se suelta una tecla
    console.log("escribiendo...");
});

busqueda.addEventListener("blur", () => { // Evento que se ejecuta cuando por ejemplo tiene seleccionado un input y le das clic a otro input, cuando se deja de seleccionar el elemento 1 es cuando se ejecuta este evento
    console.log("escribiendo...");
});

busqueda.addEventListener("copy", () => { // Evento que se ejecuta cuando se presiona las teclas para copiar
    console.log("escribiendo...");
});

busqueda.addEventListener("paste", () => { // Evento que se ejecuta cuando se presiona las teclas para pegar
    console.log("escribiendo...");
});

busqueda.addEventListener("cut", () => { // Evento que se ejecuta cuando se presiona las teclas para cortar
    console.log("escribiendo...");
});

busqueda.addEventListener("input", () => { // Evento que se ejecuta cuando sucede todo lo anterior menos el evento blur
    console.log("escribiendo...");
});


// Ejemplo de que hacer con un evento
busqueda.addEventListener("input", (evento) => { // Evento que se ejecuta cuando se suelta una tecla
    console.log(evento.type); // Devuelve sobre que elemento se ejecuta el evento 
    console.log(evento.target); // Devuelve en formato de etiqueta html el elemento sobre el cual se ejecuta
    console.log(evento.target.value); // Devuelve lo que el usuario esta escribiendo
});