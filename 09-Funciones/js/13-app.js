const reproductor = {
    cancion: '',
    reproducir: id => console.log(`Reproduciendo canción con el ${id}`),
    pausar: () => console.log("Pausando..."),
    borrar: id => console.log(`Borrando canción... ${id}`),
    crearPlayList: nombre => console.log(`Creando playlist de ${nombre}`),
    reproducirPlayList: nombre => console.log(`Reproduciendo playlist ${nombre}`),
    set nuevaCancion(cancion) {
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },
    get obtenerCancion() {
        console.log(this.cancion);
    }
}


reproductor.nuevaCancion = "Enter Sandman";
reproductor.obtenerCancion;

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlayList("Rock");
reproductor.crearPlayList("Rock 90's");
reproductor.reproducirPlayList("Rock");