// paginaControlEdad
// var ageInputScreen = document.createElement('div');
// ageInputScreen.style.position = 'fixed';
// ageInputScreen.style.top = '0';
// ageInputScreen.style.left = '0';
// ageInputScreen.style.width = '100%';
// ageInputScreen.style.height = '100%';
// ageInputScreen.style.backgroundColor = '#DBE4F5';
// ageInputScreen.style.color = '#0000D2';
// ageInputScreen.style.display = 'flex';
// ageInputScreen.style.flexDirection = 'column';
// ageInputScreen.style.justifyContent = 'center';
// ageInputScreen.style.alignItems = 'center';
// ageInputScreen.style.textAlign = 'center';
// ageInputScreen.style.zIndex = '10';


// var agePromptText = document.createElement('h2');
// agePromptText.innerText = "Please enter your age:"
// agePromptText.style.paddingBottom = '0.5em'

// var ageInput = document.createElement('input');
// ageInput.type = 'number';
// ageInput.style.padding = '10px';
// ageInput.style.marginBottom = '20px';

// ageInput.style.border = 'none';
// ageInput.style.borderRadius = '50px';

// var submitButton = document.createElement('button');
// submitButton.innerText = 'Submit';
// submitButton.style.padding = '10px 20px';
// submitButton.style.fontSize = '1em';
// submitButton.style.cursor = 'pointer';
// submitButton.style.backgroundColor = '#0000D2';
// submitButton.style.color = '#DBE4F5';
// submitButton.style.border = 'none';
// submitButton.style.borderRadius = '50px';

// submitButton.onclick = function () {
//   var age = ageInput.value;
//   if (age < 16){
//     var lockScreen = document.createElement('div');
//     lockScreen.style.position = 'fixed';
//     lockScreen.style.top = '0';
//     lockScreen.style.left = '0';
//     lockScreen.style.width = '100%';
//     lockScreen.style.height = '100%';
//     lockScreen.style.backgroundColor = '#DBE4F5';
//     lockScreen.style.color = '#0000D2';
//     lockScreen.style.display = 'flex';
//     lockScreen.style.flexDirection = 'column';
//     lockScreen.style.justifyContent = 'center';
//     lockScreen.style.alignItems = 'center';
//     lockScreen.style.textAlign = 'center';

//     var lockImage = document.createElement('img');
//     lockImage.src = 'media/img/maquinat-01.svg';
//     lockImage.style.height = '40%';
//     lockImage.style.paddingBottom = '0.5em';

//     var lockText = document.createElement('h1');
//     lockText.innerText = 'SORRY!'

//     lockScreen.appendChild(lockText);
//     lockScreen.appendChild(lockImage);

//     document.body.innerHTML = '';
//     document.body.appendChild(lockScreen);
//   } else {
//     ageInputScreen.remove();
//   }
// };

// ageInputScreen.appendChild(agePromptText);
// ageInputScreen.appendChild(ageInput);
// ageInputScreen.appendChild(submitButton);

// document.body.appendChild(ageInputScreen);



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


//Customers
var typed = new Typed('#number', {
  strings: ['<h1>1.542</h1> <h2>SATISFIED CLIENTS</h2>'],

  typeSpeed: 80,
  loop: true,
});