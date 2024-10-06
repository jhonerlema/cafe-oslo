/* Variables: cámbialas por los id y clase correspondiente */

/* id del enlace que despliega el menú */
// var lanzador = "#enlace-menu";
const lanzador = document.getElementById('enlace-menu')
/* id del menú que será desplegado */
// var desplegable = "#menu";
const desplegable = document.getElementById('menu')

/* clase (sin el punto) que muestra el menú */
const despliegaClase = document.getElementById('menu-desplegado')
	
	
/* A partir de aquí, puedes dejar el código tal cual */
	
/* declaramos las funciones */
function nav(){
	lanzador.addEventListener("click", despliegaMenu, false);
}

function despliegaMenu(e){
	e.preventDefault();
	desplegable.classList.toggle(despliegaClase);
}

/* Agregamos la clase js a la etiqueta html para saber que JS está funcionando */
document.querySelector("html").classList.add("js");


/* ejecutamos la función principal */
nav();
