document.addEventListener("DOMContentLoaded", function() {
    var parentURL = parent.window.location.pathname;
    var parentURL = parentURL.substring(1);//quitar el signo '/'
   
    var navLinks = document.querySelectorAll('#submenu li a');
    navLinks.forEach(function(link) {
        console.log(link.getAttribute('href'));
        if (link.getAttribute('href') === parentURL) {
            link.classList.add('seleccionado');
        }
    });

    if(parentURL=="mesaAyuda.html" || parentURL=="consultoria.html")
        parentURL="servicios.html"

    var navLinks = document.querySelectorAll('#menu li a');
    navLinks.forEach(function(link) {
        if (link.getAttribute('href') === parentURL) {
            link.classList.add('seleccionado');
        }
    });
});