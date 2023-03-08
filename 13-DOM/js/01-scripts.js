let elemento;

elemento = document; // devuelve todo el DOM
elemento = document.all; // devuelve todo los elementos dentro del DOM
elemento = document.head; // devuelve todo el head
elemento = document.body; // devuelve todo el body
elemento = document.domain; // devuelve el dominio que en este caso es la ip del localhost

elemento = document.forms; // devuelve todos los formularios que existen dentro del DOM || esto devuelve un tipo de array que no es un array ya que se llama HTMLCollection lo que causa que puedas llamarlo como un array
elemento = document.forms[0]; // devuelve el formulario que se encuentre en el item 0
elemento = document.forms[0].id; // devuelve el id del formulario que se encuentra en el item 0
elemento = document.forms[0].method; // devuelve el atributo method del formulario que se encuentra en el item 0
elemento = document.forms[0].classList; // devuelve todas las clases en forma de list del formulario que se encuentra en el item 0
elemento = document.forms[0].action; // devuelve la accion del formulario que se encuentra en el item 0

elemento = document.links; // devuelve una lista de todos los links/<a> que se encuentren dentro del DOM
elemento = document.links[4]; // devuelve el link/<a> que se encuentra en el item 4
elemento = document.links[4].classList; // devuelve todas las clases en forma de lista del link/<a> que se encuentra en el item 4
elemento = document.links[4].className; // devuelve todas las clases en string del link/<a> que se encuentra en el item 4

elemento = document.images; // devuelve todas las imagenes que son usadas dentro del DOM

elemento = document.scripts; // devuelve todos los scripts usados dentro del DOM


console.log(elemento);