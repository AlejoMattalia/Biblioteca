const arrayLibros = [  
{ id: 1, imagen: `https://www.fernandovicente.es/wp-content/uploads/2014/11/Cartel-Estudio-en-escarlata-Fernando-Vicente.jpg`, titulo: `Estudio en escarlata` },

{ id: 2, imagen: `https://www.planetadelibros.com.ar/usuaris/libros/fotos/260/m_libros/portada___201709181757.jpg`, titulo: `Asesinato en el Orient Express` },

{ id: 3, imagen: `https://quelibroleo.com/images/libros/libro_1322105073.jpg`, titulo: `La princesa de hielo` },

{ id: 4, imagen: `https://www.storytel.com/images/640x640/0002268294.jpg`, titulo: `Las hijas del frío` },

{ id: 5, imagen: `https://contentv2.tap-commerce.com/cover/large/9788494733154_1.jpg?id_com=1113`, titulo: `El faro del fin del mundo` },

{ id: 6, imagen: `https://global-uploads.webflow.com/6034d7d1f3e0f52c50b2adee/6254531383a0b15e9a7f0db8_60463d3f9d802109b8311c43_9788418395192_isla20del20tesoro_ClC3A1sicos20Ilustrados_COVER.jpeg`, titulo: `La isla del tesoro` },

{ id: 7, imagen: `https://www.penguinlibros.com/ar/1592872/robinson-crusoe-edicion-ilustrada.jpg`, titulo: `Robinson Crusoe` },

{ id: 8, imagen: `https://images.cdn3.buscalibre.com/fit-in/360x360/4e/10/4e104e6aa9cebad79a8919a83485210a.jpg`, titulo: `El lobo de mar` },

{ id: 9, imagen: `https://www.penguinlibros.com/ar/1590029/el-problema-de-los-tres-cuerpos-trilogia-de-los-tres-cuerpos-1.jpg`, titulo: `El problema de los tres cuerpos` },

{ id: 10, imagen: `https://images.cdn1.buscalibre.com/fit-in/360x360/79/2f/792f48e890d9c589ffc9c9a1a8259306.jpg`, titulo: `Yo, robot` },

{ id: 11, imagen: `https://http2.mlstatic.com/D_NQ_NP_816143-MLA54516896141_032023-V.jpg`, titulo: `Cita con Rama` },

{ id: 12, imagen: `https://quelibroleo.com/images/libros/libro_1322102944.jpg`, titulo: `Fundación` },

{ id: 13, imagen: `https://quelibroleo.com/images/libros/libro-1549448677.jpg`, titulo: `Amante oscuro` },

{ id: 14, imagen: `https://www.elojolector.com/wp-content/uploads/2013/09/que-nunca-amanezca-ebook-9788408117186.jpg`, titulo: `Que nunca amanezca` },

{ id: 15, imagen: `https://www.planetadelibros.com.ar/usuaris/libros/fotos/371/m_libros/portada_el-encanto-del-cuervo_maria-martinez_202212051623.jpg`, titulo: `El encanto del cuervo` },

{ id: 16, imagen: `https://www.penguinlibros.com/ar/1593815/oscuros-oscuros-1.jpg`, titulo: `Oscuros` },

{ id: 17, imagen: `https://www.penguinlibros.com/ar/1596498/bajo-la-misma-estrella.jpg`, titulo: `Bajo la misma estrella` },

{ id: 18, imagen: `https://www.planetadelibros.com.ar/usuaris/libros/fotos/282/m_libros/portada_zafiros-en-la-piel_viviana-rivero_201808241754.jpg`, titulo: `Zafiros en la piel` },

{ id: 19, imagen: `https://cloudfront-us-east-1.images.arcpublishing.com/infobae/ODUTXENZ3VBNXLCGNEWITFO4TM.jpg`, titulo: `Lo que el viento se llevó` },

{ id: 20, imagen: `https://contentv2.tap-commerce.com/cover/large/9789504976646_1.jpg?id_com=1113`, titulo: `El cuarto arcano` },

];



//BUSCADOR
let contenedor_buscador = document.getElementById("contenedor_buscador");
let buscador = document.getElementById("buscador");
let contenedor_resultados = document.getElementById("contenedor_resultados");
let ocultar_buscador = document.getElementById("ocultar_buscador");
//Filtrado de busqeuda

function mostrar() {
    ocultar_buscador.style.display = "block"
}

function ocultar() {
    ocultar_buscador.style.display = "none";
    buscador.value = "";
    contenedor_resultados.style.display = "none";
}

function buscadorGeneral() {
    let filtro = buscador.value.toUpperCase();
    let li = contenedor_resultados.getElementsByTagName("li");

    //Recorriendo elementos del buscador
    for (let i = 0; i < li.length; i++) {

        let a = li[i].getElementsByTagName("a")[0];
        let valorTexto = a.textContent || a.innerText;

        if (valorTexto.toUpperCase().indexOf(filtro) > -1) {
            li[i].style.display = "";
            contenedor_resultados.style.display = "block";

            if (buscador.value === "") {
                contenedor_resultados.style.display = "none";
            }
        }
        else {
            li[i].style.display = "none";
        }
    }
}

//Resultados del Buscador
const contenedorResultados = document.querySelector("#contenedor_resultados");

const retornarLibrosBuscador = (libro) => {
    return `<li>
                <a href="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                    ${libro.titulo}
                </a>
            </li>`;
}

const cargarLibrosBuscador = (array) => {
    contenedorResultados.innerHTML = "";

    array.forEach((libros) => {
        contenedorResultados.innerHTML += retornarLibrosBuscador(libros);
    });
}

cargarLibrosBuscador(arrayLibros);

document.getElementById("buscador").addEventListener("keyup", buscadorGeneral);
document.getElementById("contenedor_buscador").addEventListener("click", mostrar);
document.getElementById("ocultar_buscador").addEventListener("click", ocultar);





//CARTAS DE LOS LIBROS
const contenedorLibro = document.querySelector("div.container");

const retornarCardsHtml = (libro) => {
    return `<div class="libros" id=${libro.id}>
                <img src=${libro.imagen} alt="">
                <h3>${libro.titulo}</h3>
            </div>`
}

const cargarLibros = (array) => {
    contenedorLibro.innerHTML = "";
    array.forEach((libros) => {
        contenedorLibro.innerHTML += retornarCardsHtml(libros)
    });
}

cargarLibros(arrayLibros);


