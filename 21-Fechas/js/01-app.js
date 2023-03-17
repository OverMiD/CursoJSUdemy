const diaHoy = new Date();

let valor;

valor = diaHoy;

valor = diaHoy.getFullYear(); // Trae el año
valor = diaHoy.getMonth(); // Trae el numero del mes pero con un indexado de array, osea inicia desde 0
valor = diaHoy.getMinutes(); // Trae el minuto
valor = diaHoy.getHours(); // Trae la hora
valor = diaHoy.getTime(); // Trae los milisegundos transcurridos hasta el dia de hoy


console.log(valor);