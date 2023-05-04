
const modalCarrito = document.querySelector(".contenedor-modal-carrito");
const contenedorInfoCarrito = document.querySelector(".modal-info-carrito");
const total = document.querySelector(".total");
let totalCaluclado;


const contador = () => {
    let numero = carrito.length;
    const contador = document.querySelector("#contador");
    contador.innerHTML = numero;

    if(numero >= 10){
        contador.style.left = "18px"
    }
    else{
        contador.style.left = "24px"
    }
}

const carritoModal = () => {

    const agregarLibroCarrito = () => {
        const pulsarBoton = document.querySelectorAll(".botonAgregarCarrito");

        const LibrosCarrito = () => {
            const retornarlibrosCarritos = (libro) => {
                return ` <div class="mb-3 div-info-carrito d-flex flex-row align-items-center justify-content-around"
                id=${libro.id}>
                <div class="div-imagen col-2">
                    <img class="imagen-modal"
                        src=${libro.imagen} alt="">
                </div>
                <div class="div-tiutlo col-5">
                    <p class="modal-diseño">${libro.titulo}</p>
                </div>
                <div class="div-precio col-3">
                    <p class="modal-diseño precio">$${libro.precio}</p>
                </div>
                <div class="borrar-contenedor col-2">
                    <img src="img/basura.png" alt="trash" class="borrar">
                </div>
            </div>`
            }

            const cargarLibrosModal = (array) => {
                contenedorInfoCarrito.innerHTML = "";
                array.forEach((libros) => {
                    contenedorInfoCarrito.innerHTML += retornarlibrosCarritos(libros)
                });
            }

            cargarLibrosModal(carrito);
            contador();
            eliminarUnLibro();
            totalPrecio();
        }

        pulsarBoton.forEach(boton => {
            boton.addEventListener("click", (event) => {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top',
                    showConfirmButton: false,
                    timer: 1500,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                });

                Toast.fire({
                    icon: 'success',
                    title: 'Agregaste libro al carrito'
                });
                const datosBoton = event.target;
                const div = datosBoton.parentNode;
                const html = div.parentNode;
                const id = parseInt(html.id);
   

                elementosLibros = arrayLibros.find((el) => el.id === id);
                carrito.push(elementosLibros);

                guardarCarrito()
                LibrosCarrito()
            });
        });

        LibrosCarrito()
    }


    const eliminarTodosLibrosArray = () => {
        const botonCancelar = document.querySelector(".boton-elimiarTodo");
        botonCancelar.addEventListener("click", () => {
            if (carrito.length > 0) {
                carrito.splice(0, carrito.length);
                contenedorInfoCarrito.innerHTML = "";
                total.innerHTML = `Total: $0`;
                borrarTodosDatos();
                contador();

                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top',
                    showConfirmButton: false,
                    timer: 1800,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })

                Toast.fire({
                    icon: 'info',
                    title: 'Vaciaste carrito'
                })
            }
        })
    }


    const eliminarUnLibro = () => {
        const botonEliminar = document.querySelectorAll(".borrar");

        botonEliminar.forEach(element => {
            element.addEventListener("click", (event) => {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top',
                    showConfirmButton: false,
                    timer: 1800,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })

                Toast.fire({
                    icon: 'info',
                    title: 'Eliminaste libro del carrito'
                })

                const datosBoton = event.target;
                const div = datosBoton.parentNode;
                const html = div.parentNode;
                const id = parseInt(html.id);

                //Ubicacion en el array carrito
                const indiceProducto = carrito.findIndex(obj => obj.id === id);
                //Calcular el precio
                const libro = carrito.filter((el) => el.id === id);

                if (indiceProducto !== -1) {
                    carrito.splice(indiceProducto, 1);
                    recuperarCarrito();
                    guardarCarrito();
                    html.remove();
                    totalCaluclado = totalCaluclado - libro[0].precio;
                    total.innerHTML = `Total: $${totalCaluclado}`;
                }

                if (carrito.length === 0) {
                    borrarTodosDatos();
                }
                contador();
            });
        });
    }

    const totalPrecio = () => {
        if (carrito.length > 0) {
            totalCaluclado = carrito.reduce((acc, libro) => acc + libro.precio, 0);
            total.innerHTML = `Total: $${totalCaluclado}`;
        }
    }

    agregarLibroCarrito();
    eliminarTodosLibrosArray()
}



const AbrirCerrarCarrito = () => {
    const abrirModalCarrito = document.querySelector(".carrito");
    const cerrarModalCarrito = document.querySelector(".cerrarModal-carrito");
    abrirModalCarrito.addEventListener("click", () => {
        modalCarrito.style.opacity = 1;
        modalCarrito.style.pointerEvents = "unset";
    });
    cerrarModalCarrito.addEventListener("click", () => {
        modalCarrito.style.opacity = 0;
        modalCarrito.style.pointerEvents = "none";
    });
}


const comprar = () => {

    const botonComprar = document.querySelector(".boton-comprar");

    botonComprar.addEventListener("click", () => {
        if (carrito.length > 0) {
            Swal.fire({
                title: '¿Confirmar compra?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, comprar',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
  
                    Swal.fire({
                        title: '¡Confirmaste la compra!',
                        icon: 'success'
                    });
                    total.innerHTML = `Total: $0`;
                    carrito.splice(0, carrito.length);
                    contenedorInfoCarrito.innerHTML = "";
                    borrarTodosDatos();
                    contador();
                }
                else {
                    Swal.fire({
                        title: '¡Cancelaste la compra!',
                        icon: 'error',
                    });
                }
            });
        }
    })
}

AbrirCerrarCarrito()
comprar()
carritoModal()


