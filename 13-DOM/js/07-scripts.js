const encabezado = document.querySelector("h1");
console.log(encabezado.style);

// NOTA: un estilo de css que contiene dos letras normalmente va separado por un guion
// justify-content || background-color
// pero cuando vas a hacer referencia a uno de estos estilos en js debes quitar el guion y la segunda palabra debe empezar por mayuscula
// justifyContent || backgroundColor

encabezado.style.backgroundColor = "red";
encabezado.style.fontFamily = "Arial";
encabezado.style.textTransform = "uppercase"


const card = document.querySelector(".card");
card.classList.add("nueva-clase"); // permite agregar una clase al elemento
card.classList.add("segunda-clase", "tercera-clase"); // tambien se pueden agregar dos clases a la vez
card.classList.remove("card"); // remueve una clase de un elemento
console.log(card.classList);