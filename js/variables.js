const guardarCarrito = () => {
    if (carrito.length > 0) {
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }
}

const recuperarCarrito = () => {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

const borrarTodosDatos = () => {
    localStorage.clear();
}

//Arrays
const arrayLibros = [];
const carrito = recuperarCarrito();







