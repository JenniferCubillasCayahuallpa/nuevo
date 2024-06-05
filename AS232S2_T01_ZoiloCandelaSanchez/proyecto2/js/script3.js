// Esperar a que el contenido del DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar todos los elementos de texto que deseas animar
    var textElements = document.querySelectorAll('.text-animate');
  
    // Función para aplicar la animación
    function animateText(element) {
      // Definir el punto de inicio de la animación
      element.style.opacity = '0';
      element.style.transform = 'scale(0.25)';
  
      // Definir la animación
      element.animate([
        { opacity: '0', transform: 'scale(0.25)' },
        { opacity: '1', transform: 'scale(1)' }
      ], {
        duration: 1000, // Duración de la animación en milisegundos
        fill: 'both'    // Mantener el estado final después de finalizar la animación
      });
    }
  
    // Aplicar la animación a cada elemento de texto
    textElements.forEach(animateText);
  });