// METODOS DE PROPIEDAD

const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo cancion con el id ${id}`);
    },
    pausar: function() {
        console.log(`pausando...`);
    }
}

reproductor.reproducir(30); // Reproduciendo cancion con el id 30
reproductor.pausar(); // pausando...

reproductor.borrar = function() {
    console.log(`Borrando canción...`);
}

reproductor.borrar(); // Borrando canción...