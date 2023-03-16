// Variables
const formulario = document.querySelector("#formulario");
const listaTweets = document.querySelector("#lista-tweets");
let tweets = [];


// Event Listeners
eventListeners();

function eventListeners() {
    // cuando el usuario agrega un nuevo tweet
    formulario.addEventListener("submit", agregarTweet);

    // cuando el documento esta listo 
    document.addEventListener("DOMContentLoaded", () => {
        tweets = JSON.parse(localStorage.getItem("tweets") || []); // Esta declaración sirve para indicar que en caso sea null, le asigne un array vacio
        crearHTML();
    });
}



// Funciones
function agregarTweet(e) {
    e.preventDefault();

    // text area donde el usuario escribe
    const tweet = document.querySelector("#tweet").value;

    // Validacion...
    if (tweet === "") {
        mostrarError("Un mensaje no puede ir vacio");
        return;
    }

    const tweetObj = {
        id: Date.now(),
        tweet // Esto es igual a colocar tweet: tweet // En versiones mas actuales cuando la llave tiene el mismo termino que el valor, se puede escribir de esta forma 
    }

    // Añadir al arreglo de tweets
    tweets = [...tweets, tweetObj];

    // Crear HTML
    crearHTML();

    // Reiniciar el formulario
    formulario.reset();
}

// Mostrar mensaje de error
function mostrarError(error) {
    const mensajeError = document.createElement("p");
    mensajeError.textContent = error;
    mensajeError.classList.add("error");

    // Insertarlo en el contenido
    const contenido = document.querySelector("#contenido");
    contenido.appendChild(mensajeError);

    // Elimina la alerta luego de 3 segundos
    setTimeout(() => {
        mensajeError.remove();
    }, 3000);
}

// Muestra un listado de los tweets
function crearHTML() {
    limpiarHTML();
    if (tweets.length > 0) {
        tweets.forEach( tweet => {
            const btnEliminar = document.createElement("a");
            btnEliminar.classList.add("borrar-tweet");
            btnEliminar.textContent = "X"

            btnEliminar.onclick = () => {
                borrarTweet(tweet.id);
            }

            const li = document.createElement("li");
            li.textContent = tweet.tweet; // li.innerText = tweet.tweet;
            li.appendChild(btnEliminar);
            listaTweets.appendChild(li);
        });
    }

    sincronizarStorage();
}

// Agrega los tweets actuales al localStorage
function sincronizarStorage() {
    localStorage.setItem("tweets", JSON.stringify(tweets));
}

// Eliminar un tweet
function borrarTweet(id) {
    tweets = tweets.filter(tweet => tweet.id !== id)
    crearHTML();
}

// Limpiar HTML
function limpiarHTML() {
    while (listaTweets.firstChild) {
        listaTweets.removeChild(listaTweets.firstChild);
    }
}