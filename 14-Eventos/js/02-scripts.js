const nav = document.querySelector(".navegacion");

// Registrar un evento
nav.addEventListener("click", () => { // Evento que se ejecuta cuando se da clic en navegacion
    console.log("click en nav");
}); 

nav.addEventListener("mouseeneter", () => { // Evento que se ejecuta cuando el mouse entra en navegacion
    console.log("entrando a la navegacion");
}); 

nav.addEventListener("mouseout", () => { // Evento que se ejecuta cuando el mouse sale de la navegacion
    console.log("saliendo de la navegacion");
}); 

nav.addEventListener("mousedown", () => { // Evento que se ejecuta cuando se da clic. Esto es muy parecido al evento clic
    console.log("saliendo de la navegacion");
}); 

nav.addEventListener("mouseup", () => { // Evento que se ejecuta cuando se da clic y se suelta
    console.log("saliendo de la navegacion");
}); 

nav.addEventListener("dblclick", () => { // Evento que se ejecuta cuando se da doble clic
    console.log("saliendo de la navegacion");
}); 