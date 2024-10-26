
// FAQ
const icons = document.querySelectorAll('.fa-plus');

icons.forEach(icon => {
  icon.addEventListener('click', () => {

    const respuesta = icon.parentElement.nextElementSibling;

    icon.classList.toggle('icon');

    respuesta.style.display = respuesta.style.display === 'none' || respuesta.style.display === '' ? 'block' : 'none';
  });
});

