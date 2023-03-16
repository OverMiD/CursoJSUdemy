// Eliminando del localStorage
localStorage.removeItem("nombre");

// Actualizar un registro
const mesesArray = JSON.parse( localStorage.getItem("meses") );
console.log(mesesArray);
mesesArray.push("Nuevo mes");
console.log(mesesArray);
localStorage.setItem("meses", JSON.stringify(mesesArray));

// Otra forma de eliminar en localStorage
localStorage.clear(); // Este metodo elimina todo lo que se encuente en el localStorage