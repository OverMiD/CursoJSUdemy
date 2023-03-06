const enlace = document.createElement("A"); // Creando el elemento
enlace.textContent = "Nuevo enlace"; // Añadiendo el texto
enlace.href = "/nuevo-enlace"; // Añadiendo href
enlace.target = "_blank"; // Añadiendo un target
enlace.setAttribute("data-enalce", "nuevo-enlace");
enlace.classList.add("nueva-clase");
enlace.onclick = miFuncion;
console.log(enlace);

// Seleccionar la navegacion
const navegacion = document.querySelector(".navegacion");
navegacion.appendChild(enlace); // agrega un elemento hijo al elemento seleccionado
navegacion.insertBefore(enlace, navegacion.children[1]); // agrega un elemento hijo al elemento seleccionado pero este te permite ser mas especifico ya que no solo se le pasa el elemento a agregar sino tambien el elemento referncia al que se le agregara antes

function miFuncion() {
    console.log("Este es un nuevo enlace");
}



// crear un card de forma dinamica
const parrafo1 = createElement("P");
parrafo1.textContent = "Concierto";
parrafo1.classList.add("categoria", "concierto");

const parrafo2 = createElement("P");
parrafo2.textContent = "Concierto de rock";
parrafo2.classList.add("titulo");

const parrafo3 = createElement("P");
parrafo3.textContent = "$800 por persona";
parrafo3.classList.add("precio");

// Crear div con clase info
const info = document.createElement("div");
info.classList.add("info");
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

// Crear imagen
const imagen = document.createElement("img");
imagen.src = "img/hacer2.jpg";
imagen.alt = "Texto alternativo";

// Crear div card
const card = document.createElement("div");
card.classList.add("card");
card.appendChild(imagen);
card.appendChild(info);



// Insertar el card en el html
const contenedor = document.querySelector(".hacer .contenedor-cards");
contenedor.appendChild(card); // para que lo agregue al final
contenedor.insertBefore(card, contenedor.children[0]); // para que lo agregue al inicio