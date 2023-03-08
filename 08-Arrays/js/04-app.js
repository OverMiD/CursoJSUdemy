const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"];
console.table(meses);

meses[0] = "Nuevo valor"; // Cambia el valor que se encuentre dentro de la posicion indicada
console.table(meses);

meses[6] = "Julio"; // Permite crear una nueva posicion dentro del array
console.table(meses);

meses[10] = "Noviembre"; // JS permite agregar valor dentro de una posicion x no importando que aun falte llenar valores antes de esa posicion
console.table(meses);