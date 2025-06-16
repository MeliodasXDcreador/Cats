function obtenerDato() {
  fetch('https://catfact.ninja/fact')
    .then(response => response.json())
    .then(data => {
      const factElement = document.getElementById('fact');
      if (factElement) factElement.textContent = data.fact;
    })
    .catch(error => {
      const factElement = document.getElementById('fact');
      if (factElement) factElement.textContent = 'Error al obtener el dato';
      console.error('Error:', error);
    });
}
function prepararFormulario() {
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      alert('Gracias por tu mensaje. Te contactaremos pronto.');
    });
  }
}
window.addEventListener('DOMContentLoaded', () => {
  const btnDato = document.getElementById('btnDato');
  if (btnDato) {
    btnDato.addEventListener('click', obtenerDato);
    obtenerDato();
  }
  prepararFormulario();
});
