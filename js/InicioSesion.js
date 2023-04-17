//Variables
const contenedor_login_register = document.querySelector(".contenedor-login-register"); 
const caja_trasera_login = document.querySelector(".caja-trasera-login"); 
const caja_trasera_register = document.querySelector(".caja-trasera-register");
const formulario_login = document.querySelector(".form-login"); 
const formulario_register = document.querySelector(".form-register");
const volver = document.querySelector(".volver");


const registrar = ()=> {
    formulario_register.style.opacity = 1;
    contenedor_login_register.style.left = "410px";
    formulario_login.style.opacity = 0;
    caja_trasera_register.style.opacity = 0;
    caja_trasera_login.style.opacity = 1;
    volver.style.bottom = "80px"
    formulario_register.style.zIndex = 100;
    formulario_login.style.zIndex = 0;
}

const iniciarSesion = ()=> {
    formulario_login.style.opacity = 1;
    contenedor_login_register.style.left = "10px";
    formulario_register.style.opacity = 0;
    caja_trasera_login.style.opacity = 0;
    caja_trasera_register.style.opacity = 1;
    volver.style.bottom = "20px"
    formulario_login.style.zIndex = 100;
    formulario_register.style.zIndex = 0;
}

document.getElementById("btn-register").addEventListener("click", registrar);
document.getElementById("btn-login").addEventListener("click", iniciarSesion);