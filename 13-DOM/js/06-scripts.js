const encabezado = document.querySelector(".contenido-hero h1");
console.log(encabezado);

// Formas de devolver el texto de un elemento seleccionado
console.log(encabezado.innerText); // si en el css la propiedad visibility es true, no va encontrar el texto
console.log(encabezado.textContent); // si en el css la propiedad visibility es true, si va encontrar el texto
console.log(encabezado.innerHTML); // a diferencia de los anteriores, este trae el html

// Tambien se podria
const encabezado2 = document.querySelector(".contenido-hero h1").textContent;
console.log(encabezado2);

// Cambiar el texto de un elemento
document.querySelector(".contenido-hero h1").textContent;

// Seleccionar y cambiar una imagen
const imagen = document.querySelector(".card img");
imagen.src = "img/hacer2.jpg";