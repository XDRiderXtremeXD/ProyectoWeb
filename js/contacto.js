// Añade un evento 'click' al botón
document.getElementById('botonEnviar').addEventListener('click', function(event) {
    event.preventDefault(); // Previene el comportamiento por defecto del botón si está dentro de un formulario


    var nombres = document.getElementById('nombres').value;
    var apellidos = document.getElementById('apellidos').value;
    var email = document.getElementById('email').value;
    var mensaje = document.getElementById('mensaje').value;
    
    if (nombres === '' || apellidos === '' || email === '' || mensaje === '') {
        alert('Por favor, completa todos los campos.');
        return;
    }

    msj="Nombres: "+nombres+"\n"+"Apellidos: "+apellidos+"\n"+
    "Email: "+email+"\n"+"Mensaje: "+mensaje+"\n"+'El mensaje ha sido enviado, en breves se le responderá, ¡gracias!';

    alert(msj);
});