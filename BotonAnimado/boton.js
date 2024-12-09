// Selecciona el botón y el párrafo del mensaje
const boton = document.getElementById('miBoton');
const mensaje = document.getElementById('mensaje');

// Añade un evento 'click' al botón
boton.addEventListener('click', () => {
    // Muestra el mensaje con una animación
    mensaje.classList.remove('mensaje-oculto');
    mensaje.classList.add('mensaje-visible');

    // Oculta el mensaje después de 3 segundos
    setTimeout(() => {
        mensaje.classList.remove('mensaje-visible');
        mensaje.classList.add('mensaje-oculto');
    }, 3000);
});
