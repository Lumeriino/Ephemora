
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
  
// applicationElement.addEventListener("click", toggleApplication);
// closeApp.addEventListener("click", closeAppHandler);

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

document.getElementById("comprarcart").onclick = function () {
  // const total = document.getElementById.innerHTML;
  console.log("tercerboton")

  alert("Thank you for your purchase!!");
  document.getElementById("cost").innerHTML = "0€";
  document.getElementById("numberCost").value = "";
}