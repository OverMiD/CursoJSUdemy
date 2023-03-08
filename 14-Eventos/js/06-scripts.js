// Event Bubbling basicamente es el escenario en donde se ejecutan mas de un evento a la vez

const cardDiv = document.querySelector(".card");
const infoDiv = document.querySelector(".info");
const tituloDiv = document.querySelector(".titulo");

cardDiv.addEventListener("click", (e) => {
    e.stopPropagation(); // evita que se puedan desencadenar varios eventos a la vez
    console.log("click en card")
});

infoDiv.addEventListener("click", e => {
    e.stopPropagation(); // evita que se puedan desencadenar varios eventos a la vez
    console.log("click en info")
});

tituloDiv.addEventListener("click", e => {
    e.stopPropagation(); // evita que se puedan desencadenar varios eventos a la vez
    console.log("click en titulo")
});

