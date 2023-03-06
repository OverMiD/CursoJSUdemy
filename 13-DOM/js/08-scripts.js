// traversing de DOM del padre hacia el hijo
const navegacion = document.querySelector(".navegacion");
console.log(navegacion);
console.log(navegacion.childNodes); // Devuelve los elementos que existen dentro del elemento seleccionado pero tambien considera a los espacios en blanco que existen en codigo como un elemento
console.log(navegacion.children);  // Devuelve netamente los elementos html que existen en el elemento seleccionado

console.log(navegacion.children[1]); // Devuelve el elemento que esta en la posicion 1 que se encuentra dentro del elemento navegacion

const card = document.querySelector(".card");
card.children[1].children[1].textContent = "Nuevo heading desde el traversing del DOM";
card.children[0].src = "img/hacer2.jpg";
console.log(card.children[0].src); // Obtiene el elemento hijo del hijo

// traversing de DOM del hijo hacia el padre
console.log(card.parentElement); // Devuelve el elemento padre
console.log(card.parentElement.parentElement.parentElement); // Puedes colocar n cantidad de veces para llegar al elemento padre deseado

// Seleccionar elementos hermanos
console.log(card);
console.log(card.nextElementSibling); // Devuelve el elemento hermano que le sigue
console.log(card.nextElementSibling.nextElementSibling); // Tambien se puede colocar n cantidad de veces para ir avanzando entre los siguientes elementos hermanos

const ultimoCard = document.querySelector(".card:nth-child(4)");
console.log(ultimoCard.previousElementSibling); // Devuelve el elemento hermano anterior

// Otras formas de obtener elementos hijos
console.log(navegacion.firstElementChild); // Devuelve el primer elemento hijo
console.log(navegacion.lastElementChild); // Devuelve el ultimo elemento hijo