const producto = {
    nombre: "monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    mostrarInfo: function(){
        console.log(`El producto: ${this.nombre} tiene un precio de ${this.precio}`)
    }
}

producto.mostrarInfo();


// NOTA: La palabra this permite mencionar las variables que se encuentran dentro de un objeto o su propio alcance y no dentro del alcance global
