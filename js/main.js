//BUSCADOR
const buscador = () => {
    let contenedor_buscador = document.getElementById("contenedor_buscador");
    let buscador = document.getElementById("buscador");
    let contenedor_resultados = document.getElementById("contenedor_resultados");
    let ocultar_buscador = document.getElementById("ocultar_buscador");
    //Filtrado de busqeuda

    function mostrar() {
        ocultar_buscador.style.display = "block";
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

            let a = li[i].getElementsByTagName("div")[0];
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

    const retornarLibrosBuscador = (libro) => {
        return `<li class="li">
                <div id=${libro.id}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                    ${libro.titulo}
                </div>
            </li>`;
    }

    //Cargar los libros del buscador
    const cargarLibrosBuscador = (array) => {
        contenedor_resultados.innerHTML = "";

        array.forEach((libros) => {
            contenedor_resultados.innerHTML += retornarLibrosBuscador(libros);
        });
    }

    cargarLibrosBuscador(arrayLibros);

    document.getElementById("buscador").addEventListener("keyup", buscadorGeneral);
    document.getElementById("contenedor_buscador").addEventListener("click", mostrar);
    document.getElementById("ocultar_buscador").addEventListener("click", ocultar);

}





const librosImg = () => {
    //CARTAS DE LOS LIBROS
    const contenedorLibro = document.querySelector("div.containerLibros");

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


    //GENEROS
    const estilosGeneros = (genero, indice)=>{
        genero.style.transition = ".5s";
        genero.style.color = "#fff";
        genero.style.borderBottom = "#fff 3px solid";

        newArray = [...arrayGeneros];
        newArray.splice(indice, 1);
        newArray.forEach(el => {
            el.style.color = "#a0a0a0";
            el.style.borderBottom = "none";
        });
    }


    const todosLibros = document.querySelector("#todosLibros");
    todosLibros.addEventListener("click", () => {
        cargarLibros(arrayLibros);
        modal();

        estilosGeneros(todosLibros, 0);
    });

    const policiacas = document.querySelector("#policiacas");
    policiacas.addEventListener("click", () => {
        const arrayPoliciacas = arrayLibros.filter((el) => el.categoria === "policiacas");
        cargarLibros(arrayPoliciacas);
        modal();

        estilosGeneros(policiacas, 1);
    });

    const aventuras = document.querySelector("#aventuras");
    aventuras.addEventListener("click", () => {
        const arrayAventuras = arrayLibros.filter((el) => el.categoria === "aventura");
        cargarLibros(arrayAventuras);
        modal();

        estilosGeneros(aventuras, 2);
    });

    const cienciaFiccion = document.querySelector("#cienciaFiccion");
    cienciaFiccion.addEventListener("click", () => {
        const arrayCienciaFiccion = arrayLibros.filter((el) => el.categoria === "ciencia ficcion");
        cargarLibros(arrayCienciaFiccion);
        modal();

        estilosGeneros(cienciaFiccion, 3);
    });

    const paranormal = document.querySelector("#paranormal");
    paranormal.addEventListener("click", () => {
        const arrayParanormal = arrayLibros.filter((el) => el.categoria === "paranormales");
        cargarLibros(arrayParanormal);
        modal();

        estilosGeneros(paranormal, 4);
    });

    const romanticas = document.querySelector("#romanticas");
    romanticas.addEventListener("click", () => {
        const arrayRomanticas = arrayLibros.filter((el) => el.categoria === "romanticas");
        cargarLibros(arrayRomanticas);
        modal();

        estilosGeneros(romanticas, 5);

    });
    const arrayGeneros = [todosLibros, policiacas, aventuras, cienciaFiccion, paranormal, romanticas];
}





//MODAL
const modal = () => {
    const modal = document.getElementById("modal");

    //HTML MODAL
    const retornarlibrosModal = (id) => {
        let elementosLibros = arrayLibros.find((el) => el.id === id);

        const retornarModal = document.querySelector(".modal-informacion");

        retornarModal.innerHTML = `
                                    <div class="d-flex flex-row align-items-center cont--img--info" id=${elementosLibros.id}>
                                        <div class="cont-img-precio text-center">
                                            <img src=${elementosLibros.imagen} alt="">
                                            <p class="precio mt-4">Precio: $${elementosLibros.precio}</p>
                                        </div>

                                        <div class="ms-5 titulo--modal">
                                            <h2 class="text-center">${elementosLibros.titulo.toUpperCase()}</h2>
                                            <p><span>Autor:</span>${elementosLibros.autor}</p>
                                            <p><span>Editorial:</span>${elementosLibros.editorial}</p>
                                            <p><span>Fecha de publicación:</span>${elementosLibros.fechaPublicacion}</p>
                                            <p>${elementosLibros.resumen}</p>
                                            <button type="button" class="botonAgregarCarrito btn btn-light mt-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart4 pb-2" viewBox="0 0 16 16">
                                                    <path
                                                        d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                                                </svg>
                                            AGREGAR AL CARRITO
                                        </button>
                                        </div>
                                    </div>`


        modal.style.opacity = 1;
        modal.style.pointerEvents = "unset";
        carritoModal()
    }

    const cerrarModal = () => {
        const cerrarModal = document.querySelector('.cerrarModal');
        cerrarModal.addEventListener("click", () => {
            modal.style.opacity = 0;
            modal.style.pointerEvents = "none";
        });
    }


    const modalImagenes = () => {
        const abrirModal = document.querySelectorAll('.libros');

        abrirModal.forEach(array => {

            array.addEventListener("click", (event) => {
                const imagenLibros = event.target;
                const html = imagenLibros.parentNode;

                const id = parseInt(html.id);

                retornarlibrosModal(id);
            })
        });

        cerrarModal();

    }

    //MODAL
    const modalBuscador = () => {
        const abrirModal = document.querySelectorAll('.li');

        abrirModal.forEach(array => {
            array.addEventListener("click", (event) => {
                const tituloLibros = event.target;
                const id = parseInt(tituloLibros.id);

                retornarlibrosModal(id)
            })
        });

        cerrarModal();

    }

    
    modalImagenes()
    modalBuscador()
}


buscador();
librosImg();
modal();





