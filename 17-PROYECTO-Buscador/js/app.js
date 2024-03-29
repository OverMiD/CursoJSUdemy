// Variables
const marca = document.querySelector("#marca");
const year = document.querySelector("#year");
const minimo = document.querySelector("#minimo");
const maximo = document.querySelector("#maximo");
const puertas = document.querySelector("#puertas");
const transmision = document.querySelector("#transmision");
const color = document.querySelector("#color");

// Contenedor para los resultados
const resultado = document.querySelector("#resultado");

const yearMax = new Date().getFullYear();
const yearMin = yearMax - 10;

// Generar un objeto con la busqueda
const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
}

// Eventos
document.addEventListener("DOMContentLoaded", () => {
    mostrarAutos(autos); // Muestra los autos al cargar

    // Llena las opciones de años
    llenarSelect();
});

// Event listener para los select de busqueda
marca.addEventListener("change", e => {
    datosBusqueda.marca = e.target.value;
    filtrarAutos();
});

year.addEventListener("change", e => {
    datosBusqueda.year = e.target.value;
    filtrarAutos();
});

minimo.addEventListener("change", e => {
    datosBusqueda.minimo = e.target.value;
    filtrarAutos();
});

maximo.addEventListener("change", e => {
    datosBusqueda.maximo = e.target.value;
    filtrarAutos();
});

puertas.addEventListener("change", e => {
    datosBusqueda.puertas = e.target.value;
    filtrarAutos();
});

transmision.addEventListener("change", e => {
    datosBusqueda.transmision = e.target.value;
    filtrarAutos();
});

color.addEventListener("change", e => {
    datosBusqueda.color = e.target.value;
    filtrarAutos();
});

// Funciones
function mostrarAutos(autos) {
    
    limpiarHTML(); // Elimina el HTML previo

    autos.forEach(auto => {
        const { marca, modelo, year, puertas, transmision, precio, color } = auto;
        const autoHTML = document.createElement("P");
        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision} - Precio: ${precio} - Color: ${color}
        `;
        // Insertar en el html
        resultado.appendChild(autoHTML);
    });

}

// Limpiar HTML
function limpiarHTML() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}

// Generar los años del select
function llenarSelect() {
    for (let i = yearMax; i >= yearMin; i--) {
        const opcion = document.createElement("option");
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion); // Agrega las opciones en el select
    }
}

function filtrarAutos() {
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);

    if (resultado.length > 0) {
        mostrarAutos(resultado);
    } else {
        noResultado();
    }
}

function noResultado() {
    limpiarHTML();
    
    const noResultado = document.createElement("div");
    noResultado.classList.add("alerta", "error");
    noResultado.textContent = "No hay resultados. Intenta con otros términos de búsqueda";
    
    resultado.appendChild(noResultado);
}

function filtrarMarca(auto) {
    const { marca } = datosBusqueda;
    if ( marca ) {
        return auto.marca === marca;
    }
    return auto;
}

function filtrarYear(auto) {
    const { year } = datosBusqueda;
    if ( year ) {
        return auto.year === parseInt(year);
    }
    return auto;
}

function filtrarMinimo(auto) {
    const { minimo } = datosBusqueda;
    if ( minimo  ) {
        return auto.precio >= minimo;
    }
    return auto;
}

function filtrarMaximo(auto) {
    const { maximo } = datosBusqueda;
    if ( maximo  ) {
        return auto.precio <= maximo;
    }
    return auto;
}

function filtrarPuertas(auto) {
    const { puertas } = datosBusqueda;
    if ( puertas ) {
        return auto.puertas === parseInt(puertas);
    }
    return auto;
}

function filtrarTransmision(auto) {
    const { transmision } = datosBusqueda;
    if ( transmision ) {
        return auto.transmision === transmision;
    }
    return auto;
}

function filtrarColor(auto) {
    const { color } = datosBusqueda;
    if ( color ) {
        return auto.color === color;
    }
    return auto;
}