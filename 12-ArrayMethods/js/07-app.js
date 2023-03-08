const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ["Agosto", "Septiembre"];
const meses3 = ["Octubre", "Noviembre", "Diciembre"];


// .concat
const resultado = meses.concat(meses2, meses3);

console.log(meses3); // contiene todos los items de los 3 arreglos


// spread operator
const resultado2 = [...meses, ...meses2, ...meses3];
console.log(resultado2); // contiene todos los items de los 3 arreglos

const resultado3 = [..."Otro valor"];
console.log(resultado3); // convierte a un arreglo el string mencionado, osea, ["O", "t", "r", "o", "", "v", "a", "l", "o", "r"]