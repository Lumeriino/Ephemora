// scroll
window.addEventListener('scroll', () => {
  const scrollValue = window.pageYOffset / (document.body.offsetHeight - window.innerHeight);
  
  document.querySelectorAll(".rotatingImage").forEach((img)=> {img.style.setProperty('--scroll', scrollValue);
  });
});

// FAQ
const icons = document.querySelectorAll('.fa-plus');

icons.forEach(icon => {
  icon.addEventListener('click', () => {

    const respuesta = icon.parentElement.nextElementSibling;

    icon.classList.toggle('icon');

    respuesta.style.display = respuesta.style.display === 'none' || respuesta.style.display === '' ? 'block' : 'none';
  });
});

// menu
const menu = document.getElementById("menu");
const menuToggle = document.getElementById("menuToggle");
const closeMenu = document.getElementById("closeMenu");
const menuLinks = document.querySelectorAll(".menuLink");

// Función para alternar el menú
function toggleMenu() {
    menu.classList.toggle("active"); // Alternar la clase 'active' en el menú
}

// Función para cerrar el menú
function closeMenuHandler() {
    menu.classList.remove("active"); // Quitar la clase 'active' para cerrar el menú
}

// Asignar el evento de clic al ícono del menú
menuToggle.addEventListener("click", toggleMenu);

// Asignar el evento de clic al ícono de cerrar menú
closeMenu.addEventListener("click", closeMenuHandler);

// Asignar evento a los enlaces del menú
menuLinks.forEach(link => {
    link.addEventListener("click", closeMenuHandler);
});

// aplication
const button = document.getElementById("button");
const applicationElement = document.getElementById("application");
const closeApp = document.getElementById("closeApp");
// const menuLinks = document.querySelectorAll(".menuLink");

// Función para alternar el menú
function toggleApplication() {
    button.classList.toggle("active"); // Alternar la clase 'active' en el menú
}

// Función para cerrar el menú
function closeAppHandler() {
    button.classList.remove("active"); // Quitar la clase 'active' para cerrar el menú
}

// Asignar el evento de clic al ícono del menú
applicationElement.addEventListener("click", toggleApplication);

// Asignar el evento de clic al ícono de cerrar menú
closeApp.addEventListener("click", closeAppHandler);

// Asignar evento a los enlaces del menú
// menuLinks.forEach(link => {
//     link.addEventListener("click", closeAppHandler);
// });
