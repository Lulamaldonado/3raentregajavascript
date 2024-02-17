const inputEmail=document.querySelector('Email')
const inputContraseña= document.querySelector('contraseña')

const boton1 = document.querySelector('.boton1')

function usuarioIngresado () {

localStorage.setItem('#Email', inputEmail.value)
localStorage.setItem('#Contraseña', inputContraseña.value)
}

bottonEnviar =document.addEventListener("click", usuarioIngresado)






/*Document.addEventListener("DOMContentLoaded", function () {
  let boton = document.querySelector(".boton1");
  boton.addEventListener("click", function () {bottonEnviar
    window.location.href = "./horarios.html";
  });
});
*/