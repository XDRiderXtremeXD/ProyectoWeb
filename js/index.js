let c=0; //inicializamos la variable c, la cual usaremos como contador o número de cambio.
    
    function carrusel(){
        let imagen=document.getElementById("banner"); //almacenamos el elemento con id banner en la variable imagen.
        c++; //sumamos 1 a la variable c
        if(c>5){ //si c es mayor que 5 (porque solo tenemos 5 imagenes con el nombre banner), c vuelve a 1. 
            c=1;
        }
        imagen.setAttribute("src", "img/imgbar/banner"+c+".jpg");//cambiamos la ruta de la imagen usando el setAttribute y concatenamos la ruta de la imagen + la variable c + la extensión de la imagen.
        setTimeout(carrusel, 3000); //hacemos que carrusel se ejecute cada 1000 ms (1s)
    }
    