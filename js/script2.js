
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
  

document.getElementById("comprarprod").onclick = function () {
    // const total = document.getElementById("total").innerHTML;
    console.log("segundoboton")
  
    alert("Thank you for your purchase!!");
    document.getElementById("cost").innerHTML = "0€";
    document.getElementById("numberCost").value = "";
};

// FILTERS
function applyFilters() {
  const selectedPrices = Array.from(document.querySelectorAll(".filter-price:checked")).map(cb => cb.value);
  const selectedCategories = Array.from(document.querySelectorAll(".filter-category:checked")).map(cb => cb.value);

  const products = document.querySelectorAll("#best_s .best_s");

  products.forEach(item => {
      const itemPrice = parseInt(item.getAttribute("data-price"), 10);
      const itemCategory = item.getAttribute("data-category");

      let priceMatch = selectedPrices.length === 0 || 
          (selectedPrices.includes("under-10") && itemPrice < 10) ||
          (selectedPrices.includes("10-20") && itemPrice >= 10 && itemPrice <= 20) ||
          (selectedPrices.includes("over-20") && itemPrice > 20);

      let categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(itemCategory);

      if (priceMatch && categoryMatch) {
          item.style.display = "block"; 
      } else {
          item.style.display = "none";
      }
  });
}

function resetFilters() {
  const priceCheckboxes = document.querySelectorAll(".filter-price");
  const categoryCheckboxes = document.querySelectorAll(".filter-category");

  priceCheckboxes.forEach(cb => cb.checked = false);
  categoryCheckboxes.forEach(cb => cb.checked = false);

  const products = document.querySelectorAll("#best_s .best_s");
  products.forEach(item => {
      item.style.display = "block"; 
  });
}
