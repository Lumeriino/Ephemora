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

function toggleMenu() {
    menu.classList.toggle("active");
}

function closeMenuHandler() {
    menu.classList.remove("active"); 
}

menuToggle.addEventListener("click", toggleMenu);

closeMenu.addEventListener("click", closeMenuHandler);

menuLinks.forEach(link => {
    link.addEventListener("click", closeMenuHandler);
});

const button = document.getElementById("button");
const applicationElement = document.getElementById("application");
const closeApp = document.getElementById("closeApp");

function toggleApplication() {
    button.classList.toggle("active"); 
}

function closeAppHandler() {
    button.classList.remove("active"); 
}

applicationElement.addEventListener("click", toggleApplication);

closeApp.addEventListener("click", closeAppHandler);

// Suscribe
// function enviar() {
//   "use stict";

//   document.getElementById("popup").style.display = "block";
//   return false;
// }

// function closePopup () {
//   "use strict";
//   document.getElementById("popup").style.display = "none";
//   document.getElementById("user").value = ""
// }

document.getElementById("subscribeForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  document.getElementById("user").value = "";
});

// function closePopup() {
//   document.getElementById("popupMessage").style.display = "none"
// }
