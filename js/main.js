const arrayLibros = [
    { id: 1, imagen: `https://www.fernandovicente.es/wp-content/uploads/2014/11/Cartel-Estudio-en-escarlata-Fernando-Vicente.jpg`, titulo: `Estudio en escarlata`, autor: `Arthur Conan Doyle`, editorial: `Editorial Bululú`, fechaPublicacion: 1887, resumen: `Watson y Holmes se mudan al 221B de Baker Street, donde Watson se enfrenta a Holmes y a su habilidad para la deducción.
    Holmes es llamado para resolver un asesinato: una casa desierta, un cadáver sin heridas, una misteriosa frase escrita con sangre en la pared...`, precio: `2.949`, categoria: `policiacas`
    },

    { id: 2, imagen: `https://www.planetadelibros.com.ar/usuaris/libros/fotos/260/m_libros/portada___201709181757.jpg`, titulo: `Asesinato en el Orient Express`, autor: `Agatha Christie`, editorial: `Collins Crime Club`, fechaPublicacion: 1934, resumen: `Una niña de tres años llamada Daisy Armstrong fue secuestrada por un hombre llamado Cassetti, asesinó a la niña. La muerte de la niña devastó a la familia, provocó varias muertes y suicidios.`, precio: `3.890`, categoria: `policiacas` },

    { id: 3, imagen: `https://quelibroleo.com/images/libros/libro_1322105073.jpg`, titulo: `La princesa de hielo`, autor: `Camilla Läckberg`, editorial: `Maeva`, fechaPublicacion: 2003, resumen: `Erica descubre que su amiga, Alex, acaba de suicidarse. Inicia una investigación y descubre que Alex estaba embarazada. La autopsia revela que su amiga no se suicidó sino que fue asesinada. La policía detiene al principal sospechoso, Anders, un artista fracasado.`, precio: `4.500`, categoria: `policiacas` },

    { id: 4, imagen: `https://www.storytel.com/images/640x640/0002268294.jpg`, titulo: `Las hijas del frío`, autor: `Camilla Läckberg`, editorial: `OCEANO`, fechaPublicacion: 2005, resumen: `Erica sufre una depresión posparto, encuentra apoyo en Charlotte, madre de Sara. Encuentran el cadáver de Sara, ahogada en el mar. La autopsia revela que fue ahogada en una bañera antes de ser arrojada al mar. Otro niño es atacado; éste vive, pero cunde el pánico en Fjällbacka.`, precio: `4.500`, categoria: `policiacas` },

    { id: 5, imagen: `https://contentv2.tap-commerce.com/cover/large/9788494733154_1.jpg?id_com=1113`, titulo: `El faro del fin del mundo`, autor: `Julio Verne`, editorial: `EDITORIAL VERBUM`, fechaPublicacion: 1905, resumen: `Tres guardianes son designados para cuidar un nuevo faro situado en Staten Island, una isla localizada a 200 kilómetros al noreste del Cabo Horn en el Océano Atlántico. Desafortunadamente, la isla cuenta entre sus residentes con un grupo de piratas liderados por Kongre.`, precio: `6.789`, categoria: `aventura` },

    { id: 6, imagen: `https://global-uploads.webflow.com/6034d7d1f3e0f52c50b2adee/6254531383a0b15e9a7f0db8_60463d3f9d802109b8311c43_9788418395192_isla20del20tesoro_ClC3A1sicos20Ilustrados_COVER.jpeg`, titulo: `La isla del tesoro`, autor: `Robert Louis Stevenson`, editorial: `PlanetadeLibros`, fechaPublicacion: 1883, resumen: `Un grupo de aventureros van a la búsqueda de un tesoro enterrado en una isla por un viejo pirata. Narrada en primera persona por el joven marinero Jim Hawkins, contiene una expedición a tierras lejanas y desconocidas, peligros, piratas y un tesoro escondido.`, precio: `2.340`, categoria: `aventura` },

    { id: 7, imagen: `https://www.penguinlibros.com/ar/1592872/robinson-crusoe-edicion-ilustrada.jpg`, titulo: `Robinson Crusoe`, autor: `Daniel Defoe`, editorial: `Editorial Alma`, fechaPublicacion: 1719, resumen: `Un marinero es el único superviviente. Abandonado en una isla desierta, hace lo posible por mantenerse con vida hasta lograr escapar de su prisión de agua y arena. Sólo su ingenio podrá salvarlo de los peligros y de las amenazas de las islas vecinas.`, precio: `8.000`, categoria: `aventura` },

    { id: 8, imagen: `https://images.cdn3.buscalibre.com/fit-in/360x360/4e/10/4e104e6aa9cebad79a8919a83485210a.jpg`, titulo: `El lobo de mar`, autor: `Jack London`, editorial: `AKAL EDICIONES`, fechaPublicacion: 1904, resumen: ` Humphrey van Weyden es un joven intelectual e idealista que, tras naufragar en un ferry en aguas del pacífico, es rescatado por un barco capitaneado por Wolf Larsen, es cruel, despiadado y sin escrúpulos. Sometido a su tiránica autoridad, el joven descubrirá la dureza y la impiedad de un mundo primitivo.`, precio: `3.699`, categoria: `aventura` },

    { id: 9, imagen: `https://www.penguinlibros.com/ar/1590029/el-problema-de-los-tres-cuerpos-trilogia-de-los-tres-cuerpos-1.jpg`, titulo: `El problema de los tres cuerpos`, autor: `Liu Cixin`, editorial: `Gnome Press`, fechaPublicacion: 1950, resumen: `Un videojuego de historia. Los alienígenas empiezan a ganar a los jugadores, se forman dos bandos, unos dispuestos a dar la bienvenida y ayudarlos a cambiar el mundo, y otros para luchar contra la invasión.`, precio: `7.699`, categoria: `ciencia ficcion` },

    { id: 10, imagen: `https://images.cdn1.buscalibre.com/fit-in/360x360/79/2f/792f48e890d9c589ffc9c9a1a8259306.jpg`, titulo: `Yo, robot`, autor: `Isaac Asimov`, editorial: `Editorial Nova`, fechaPublicacion: 1973, resumen: `En el futuro cibernético (de 2047 a 2064) los robots y humanos conviven. Se dan conflictos que hacen poner sobre la mesa la ética del asunto. Los final son prometedor, ya que todos los robots se rigen por las tres Leyes de la Robótica. Siempre deben procurar el bien para los humanos y cumplir sus órdenes.`, precio: `8.399`, categoria: `ciencia ficcion` },

    { id: 11, imagen: `https://http2.mlstatic.com/D_NQ_NP_816143-MLA54516896141_032023-V.jpg`, titulo: `Cita con Rama`, autor: `Arthur C. Clarke`, editorial: `Ediciones B`, fechaPublicacion: 2008, resumen: `El impacto de un asteroide que destruye Padua y Verona, se crea un sistema para detectar cualquier objeto desde la Tierra. Se detecta Rama, un asteroide que gira a un velocidad increíble y que no volverá a pasar por el sistema solar. Aparecen indicios de que Rama pueda ser artificial, con las implicaciones que ello conlleva`, precio: `10.792`, categoria: `ciencia ficcion` },

    { id: 12, imagen: `https://quelibroleo.com/images/libros/libro_1322102944.jpg`, titulo: `Fundación`, autor: `Isaac Asimov`, editorial: `Cenit`, fechaPublicacion: 1951, resumen: `El hombre se ha dispersado por los planetas de la galaxia, unificada alrededor de un Imperio pacífico cuya capital es Trántor. El sistema funcionó durante incontables generaciones, pero se ha convertido en el símbolo de la corrupción imperial. Solamente Hari Seldon fue capaz de prever el derrumbamiento del Imperio.`, precio: `7.199`, categoria: `ciencia ficcion`},

    { id: 13, imagen: `https://quelibroleo.com/images/libros/libro-1549448677.jpg`, titulo: `Amante oscuro`, autor: `Jessica Bird`, editorial: `SUMA`, fechaPublicacion: 2019, resumen: `se desarrolla una guerra entre los vampiros y sus verdugos… En ella destaca una hermandad de seis vampiros. Wrath arrastra a la bella joven al mundo de los no-muertos… Beth Randall es incapaz de resistirse, es increíblemente atractivo, que la visita cada noche.`, precio: `3.237`, categoria: `paranormales` },

    { id: 14, imagen: `https://www.elojolector.com/wp-content/uploads/2013/09/que-nunca-amanezca-ebook-9788408117186.jpg`, titulo: `Que nunca amanezca`, autor:`Abigail Gibbs`, editorial: `PLANETA`, fechaPublicacion: 2012, resumen: `Antes de que pudiera decir una sola palabra más, Kaspar empujó contra la pared y comenzó a recorrerme el cuello con los labios. Se le agitó la respiración y sentí su fuerza, su poder, su hambre. Me dejó helada y provocó que un escalofrío me recorriera los hombros y los brazos.`, precio: `7.800`, categoria: `paranormales` },

    { id: 15, imagen: `https://www.planetadelibros.com.ar/usuaris/libros/fotos/371/m_libros/portada_el-encanto-del-cuervo_maria-martinez_202212051623.jpg`, titulo: `El encanto del cuervo`, autor:`María Martínez`, editorial: `Booket`, fechaPublicacion: 2013, resumen: `La vida de Abby cambia por completo, despues de la muerte de su madre, ahora tiene amigos, familia y un lugar. La atormentan terribles pesadillas y esa sensación de sentirse observada. El peligro está cerca y acecha como la sombra de un cuervo en la oscuridad.`, precio: `6.300`, categoria: `paranormales`},

    { id: 16, imagen: `https://www.penguinlibros.com/ar/1593815/oscuros-oscuros-1.jpg`, titulo: `Oscuros`, autor:`Lauren Kate`, editorial: `SUDAMERICANA`, fechaPublicacion: 2009, resumen: `Daniel no quiere nada con Luce. Pero Luce no lo puede dejar ir. Está empeñada en averiguar qué secretos guarda Daniel, aunque le cueste la vida. En el proceso, Luce descubrirá que esta historia de amor aparentemente nueva tiene un origen que se remonta miles de años atrás un origen más trágico y formidable.`, precio: `5.400`, categoria: `paranormales` },

    { id: 17, imagen: `https://www.penguinlibros.com/ar/1596498/bajo-la-misma-estrella.jpg`, titulo: `Bajo la misma estrella`, autor:`John Green`, editorial: `Dutton Books`, fechaPublicacion: 2012, resumen: `Hazel y Gus son dos adolescentes que comparten un mordaz ingenio, un desdén por lo convencional y un amor que los arrastra a un viaje inolvidable. Su relación resulta milagrosa cuando conocieron y enamoraron en un grupo de apoyo a enfermos de cáncer`, precio: `5.500`, categoria: `romanticas` },

    { id: 18, imagen: `https://www.planetadelibros.com.ar/usuaris/libros/fotos/282/m_libros/portada_zafiros-en-la-piel_viviana-rivero_201808241754.jpg`, titulo: `Zafiros en la piel`, autor:`Viviana Rivero`, editorial: `EMECE`, fechaPublicacion: 2018, resumen: `El amor, ese sentimiento poderoso, recorre las páginas de los doce relatos que integran Zafiros en la piel. Desinteresado, erótico, altruista, fraternal, obsesivo, apasionado, sacrificado, abrasador: sus variantes son múltiples como los personajes de estas historias.`, precio: `2.000`, categoria: `romanticas` },

    { id: 19, imagen: `https://cloudfront-us-east-1.images.arcpublishing.com/infobae/ODUTXENZ3VBNXLCGNEWITFO4TM.jpg`, titulo: `Lo que el viento se llevó`, autor:`Margaret Mitchell`, editorial: `Macmillan Publishers`, fechaPublicacion: 1936, resumen: `Rhett Butler, está enamorado de Scarlett, pero ésta prefiere vengarse de Melanie casándose con su hermano Charles. Cuando la guerra cese, Scarlett habrá enviudado, y Batler intentará de nuevo seducirla.`, precio: `6.300`, categoria: `romanticas` },

    { id: 20, imagen: `https://contentv2.tap-commerce.com/cover/large/9789504976646_1.jpg?id_com=1113`, titulo: `El cuarto arcano`, autor:`Florencia Bonelli`, editorial: `PLANETA`, fechaPublicacion: 2007, resumen: `Roger Blackraven es un hombre de negocios cuyo interés radica en Buenos Aires, donde es dueño de tierras. Melody Maguire es una joven criolla de padre irlandés, el cual huyó de su tierra natal. Cuando las vidas de Roger y de Melody se crucen, cambiarán para siempre`, precio: `6.400`, categoria: `romanticas` },

];



const buscador = () => {
    //BUSCADOR
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


    // //GENEROS
    // const policiacas = document.getElementById("policiacas");
    // policiacas.addEventListener("click", ()=>{

    // })
}






const modal = () => {
    //MODAL
    const modalImagenes = () => {
        const abrirModal = document.querySelectorAll('.libros');
        const cerrarModal = document.querySelector('.cerrarModal');
        const modal = document.getElementById("modal");

        abrirModal.forEach(array => {

            array.addEventListener("click", (event) => {
                const imagenLibros = event.target;
                const html = imagenLibros.parentNode;

                const id = parseInt(html.id);

                let elementosLibros = arrayLibros.find((el) => el.id === id);


                const retornarModal = document.querySelector(".modal--div");
                retornarModal.innerHTML = `
            <div class="d-flex flex-row align-items-center cont--img--info">
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
                    <button type="button" class="btn btn-light mt-2">
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
            })
        });

        cerrarModal.addEventListener("click", () => {
            modal.style.opacity = 0;
            modal.style.pointerEvents = "none";
        })

    }




    //MODAL
    const modalBuscador = () => {
        const abrirModal = document.querySelectorAll('.li');
        const cerrarModal = document.querySelector('.cerrarModal');
        const modal = document.getElementById("modal");

        abrirModal.forEach(array => {
            array.addEventListener("click", (event) => {
                const tituloLibros = event.target;
                const id = parseInt(tituloLibros.id);

                let elementosLibros = arrayLibros.find((el) => el.id === id);

                const retornarModal = document.querySelector(".modal--div");
                retornarModal.innerHTML = `
            <div class="d-flex flex-row align-items-center cont--img--info">
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
                    <button type="button" class="btn btn-light mt-2">
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
            })
        });

        cerrarModal.addEventListener("click", () => {
            modal.style.opacity = 0;
            modal.style.pointerEvents = "none";
        })

    }
    modalImagenes()
    modalBuscador()
}


buscador();
librosImg();
modal();