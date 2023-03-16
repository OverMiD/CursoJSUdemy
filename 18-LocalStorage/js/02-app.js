// Obteniendo valores del localStorage
const nombre = localStorage.getItem("nombre"); 
console.log(nombre);

// Asi como se puede transformar de un objeto o array a un string, tambien se puede convertir de un string a un objeto o array usando JSON.parse()
const productoJSON = localStorage.getItem("producto");
console.log(JSON.parse(productoJSON));

const mesesJSON = localStorage.getItem("meses");
const mesesArray = JSON.parse(mesesJSON);
console.log(mesesArray);