const card = document.querySelector(".card"); // retorna el primer elemento que encuentre
console.log(card); 

// Podemos tener selectores especificos como en css
const info = document.querySelector(".premiun .info");
console.log(info);

// Seleccionar el segundo card de hospedaje
const segundCard = document.querySelector("section.hospedaje .card:nth-child(2)");
console.log(segundCard);

// Seleccionar el formulario
const formulario = document.querySelector("#formulario");
console.log(formulario);

// Seleccionar elementos html
const navegacion = document.querySelector("nav");
console.log(navegacion);