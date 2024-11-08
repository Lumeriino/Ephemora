// paginaControlEdad
var ageInputScreen = document.createElement('div');
ageInputScreen.style.position = 'fixed';
ageInputScreen.style.top = '0';
ageInputScreen.style.left = '0';
ageInputScreen.style.width = '100%';
ageInputScreen.style.height = '100%';
ageInputScreen.style.backgroundColor = '#DBE4F5';
ageInputScreen.style.color = '#0000D2';
ageInputScreen.style.display = 'flex';
ageInputScreen.style.flexDirection = 'column';
ageInputScreen.style.justifyContent = 'center';
ageInputScreen.style.alignItems = 'center';
ageInputScreen.style.textAlign = 'center';
ageInputScreen.style.zIndex = '10';


var agePromptText = document.createElement('h2');
agePromptText.innerText = "Please enter your age:"
agePromptText.style.paddingBottom = '0.5em'

var ageInput = document.createElement('input');
ageInput.type = 'number';
ageInput.style.padding = '10px';
ageInput.style.marginBottom = '20px';

ageInput.style.border = 'none';
ageInput.style.borderRadius = '50px';

var submitButton = document.createElement('button');
submitButton.innerText = 'Submit';
submitButton.style.padding = '10px 20px';
submitButton.style.fontSize = '1em';
submitButton.style.cursor = 'pointer';
submitButton.style.backgroundColor = '#0000D2';
submitButton.style.color = '#DBE4F5';
submitButton.style.border = 'none';
submitButton.style.borderRadius = '50px';

submitButton.onclick = function () {
  var age = ageInput.value;
  if (age < 16){
    var lockScreen = document.createElement('div');
    lockScreen.style.position = 'fixed';
    lockScreen.style.top = '0';
    lockScreen.style.left = '0';
    lockScreen.style.width = '100%';
    lockScreen.style.height = '100%';
    lockScreen.style.backgroundColor = '#DBE4F5';
    lockScreen.style.color = '#0000D2';
    lockScreen.style.display = 'flex';
    lockScreen.style.flexDirection = 'column';
    lockScreen.style.justifyContent = 'center';
    lockScreen.style.alignItems = 'center';
    lockScreen.style.textAlign = 'center';

    var lockImage = document.createElement('img');
    lockImage.src = 'media/img/maquinat-01.svg';
    lockImage.style.height = '40%';
    lockImage.style.paddingBottom = '0.5em';

    var lockText = document.createElement('h1');
    lockText.innerText = 'SORRY!'

    lockScreen.appendChild(lockText);
    lockScreen.appendChild(lockImage);

    document.body.innerHTML = '';
    document.body.appendChild(lockScreen);
  } else {
    ageInputScreen.remove();
  }
};

ageInputScreen.appendChild(agePromptText);
ageInputScreen.appendChild(ageInput);
ageInputScreen.appendChild(submitButton);

document.body.appendChild(ageInputScreen);

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

// scroll
window.addEventListener('scroll', () => {
    const scrollValue = window.pageYOffset / (document.body.offsetHeight - window.innerHeight);
    
    document.querySelectorAll(".rotatingImage").forEach((img)=> {img.style.setProperty('--scroll', scrollValue);
    });
});

// buy
document.getElementById("cost").innerHTML = "0€";

function totalCost() {
    "use strict";

    let numberCost = document.getElementById("numberCost").value;
    const pricePerTicket = 7;

    if (numberCost > 0) {
        document.getElementById("cost").innerHTML = (numberCost * pricePerTicket) + "€";
    } else {
        document.getElementById("cost").innerHTML = "0€";
    }
}

$("#comprar").on("click", function () {
    console.log("primerboton");
    alert("Thank you for your purchase!!");
    $("#cost").html("0€");
    $("#numberCost").val("");
});

//Customers
var typed = new Typed('#number', {
  strings: ['<h1>1.542</h1> <h2>SATISFIED CLIENTS</h2>'],

  typeSpeed: 80,
  loop: true,
});

// Suscribe
document.getElementById("subscribeForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    document.getElementById("user").value = "";
    alert("Thanks for suscribing!");
  });

// aos

AOS.init();