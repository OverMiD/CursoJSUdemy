new Date().toLocaleString(); // 14/7/2020 13:04:37
new Date().toLocaleTimeString(); // 13:04:42
new Date().toLocaleDateString(); // 14/7/2020

const diaHoy = new Date();

// https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.27.0/moment.min.js // es una libreria que te permite interactuar de forma mas amigable con fechas

moment.locale("es");

console.log( moment().format("MMMM Do YYYY h:mm:ss a") );

console.log( moment().format("LLLL", diaHoy) );

console.log( moment().add(3, "days").calendar() );