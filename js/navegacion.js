document.addEventListener("DOMContentLoaded", function() {
    let parentURL = parent.window.location.pathname;
    parentURL = parentURL.substring(1);//quitar el signo '/'

    console.log("link ",parentURL);
   
    let navLinks = document.querySelectorAll('#submenu li a');
    navLinks.forEach(function(link) {
        console.log(link.getAttribute('href'));
        //si la url es igual al href pone en ese elemento la clase seleccionado
        if (link.getAttribute('href') === parentURL) {
            console.log("Coincidio href con "+parentURL);
            link.classList.add('seleccionado');
        }
    });

    
    if(parentURL=="mesaAyuda.html" || parentURL=="consultoria.html"){
        parentURL="servicios.html"}

    navLinks = document.querySelectorAll('#menu li a');
    navLinks.forEach(function(link) {
        if (link.getAttribute('href') === parentURL) {
            console.log("Coincidio href con "+parentURL);
            link.classList.add('seleccionado');
        }
    });
});