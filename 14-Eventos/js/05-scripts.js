window.addEventListener("scroll", () => { // Evento que se ejecuta cuando se hace scroll
    console.log("scrolling...");
});

window.addEventListener("scroll", () => { 
    const scrollPX = window.scrollY; // Capturamos la cantidad en pixeles que scrolleamos
    console.log(scrollPX);

    const premium = document.querySelector(".premium");
    const ubicacion = premium.getBoundingClientRect();

    if (ubicacion.top < 784)
        console.log("El elemento ya es visible");
    else
        console.log("Aún no, da mas scroll");
});

