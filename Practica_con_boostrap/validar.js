var nombre=document.getElementById("nombre");
var email=document.getElementById("email name");
var pagina=document.getElementById("sitioweb");
var mensaje=document.getElementById("mensaje");

var formulario=document.getElementById("contact_form");
formulario.addEventListener("click",function (evt){
evt.preventDefault();var mensajesE=[];
if (nombre=null || nombre=="" ) {
    mensajesE.push("No deje vacio el campo del nombre");
}
if (email=null || email=="") {
    mensajesE.push("No deje vacio el campo del email");
}
if (pagina=null || pagina=="") {
    mensajesE.push("No deje vacio el campo de la pagina");
}
if (mensaje=null || mensaje=="") {
    mensajesE.push("No deje vacio  el campo ");
}


error.innerHtml=mensajesE.join("h1");


});

