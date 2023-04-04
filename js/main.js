const arrayLibros = [   {id: 1, imagen: `https://www.fernandovicente.es/wp-content/uploads/2014/11/Cartel-Estudio-en-escarlata-Fernando-Vicente.jpg`, titulo: `Estudio en escarlata`},
                        {id: 2, imagen: `../img/biblioteca.jpg`, titulo: `Segundo libro`},
                        {id: 3, imagen: `../img/logo.png`, titulo: `Tercer libro`},
                        {id: 4,imagen: `../img/biblioteca.jpg`, titulo: `Cuarto libro`},
                        {id: 5,imagen: `../img/biblioteca.jpg`, titulo: `Quinto libro`},
                        {id: 6,imagen: `../img/biblioteca.jpg`, titulo: `Sexto libro`},
                        {id: 7,imagen: `../img/biblioteca.jpg`, titulo: `Septimo libro`},
                        {id: 8,imagen: `../img/biblioteca.jpg`, titulo: `Octavo libro`},
                        {id: 9,imagen: `../img/biblioteca.jpg`, titulo: `Noveno libro`},
                        {id: 10,imagen: `../img/biblioteca.jpg`, titulo: `Decimo libro`},
                        {id: 11,imagen: `../img/biblioteca.jpg`, titulo: `undécimo libro`},
                        {id: 12,imagen: `../img/biblioteca.jpg`, titulo: `duodécimo libro`},
                        {id: 13,imagen: `../img/biblioteca.jpg`, titulo: `decimotercero libro`},
                        {id: 14,imagen: `../img/biblioteca.jpg`, titulo: `decimocuarto libro`},
                        {id: 15,imagen: `../img/biblioteca.jpg`, titulo: `decimoquinto libro`},
                        {id: 16,imagen: `../img/biblioteca.jpg`, titulo: `decimosexto libro`},];



//BUSCADOR
let contenedor_buscador = document.getElementById("contenedor_buscador");
let buscador = document.getElementById("buscador");
let contenedor_resultados = document.getElementById("contenedor_resultados");
let ocultar_buscador = document.getElementById("ocultar_buscador");
//Filtrado de busqeuda

function mostrar(){
    ocultar_buscador.style.display = "block"
}

function ocultar(){
    ocultar_buscador.style.display = "none";
    buscador.value = "";
    contenedor_resultados.style.display = "none";
}

function buscadorGeneral(){
    let filtro = buscador.value.toUpperCase();
    let li = contenedor_resultados.getElementsByTagName("li");

    //Recorriendo elementos del buscador
    for(let i=0; i<li.length; i++){

        let a = li[i].getElementsByTagName("a")[0];
        let valorTexto = a.textContent || a.innerText;

        if(valorTexto.toUpperCase().indexOf(filtro) > -1){
            li[i].style.display = "";
            contenedor_resultados.style.display = "block";

            if(buscador.value === ""){
                contenedor_resultados.style.display = "none";
            }
        }
        else{
            li[i].style.display = "none";
        }
    }
}

//Resultados del Buscador
const contenedorResultados = document.querySelector("#contenedor_resultados");

const retornarLibrosBuscador = (libro)=> {
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

const cargarLibrosBuscador = (array)=> {
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

const retornarCardsHtml = (libro) =>{
    return `<div class="libros" id=${libro.id}>
                <img src=${libro.imagen} alt="">
                <h3>${libro.titulo}</h3>
            </div>`
}

const cargarLibros = (array) =>{
    contenedorLibro.innerHTML = "";
    array.forEach((libros) => {
        contenedorLibro.innerHTML += retornarCardsHtml(libros)
    });
}

cargarLibros(arrayLibros);


