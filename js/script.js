function changeOpacity() {
  var scroll = window.scrollY;

  var menu = document.getElementById("menu").clientHeight;

  var max_scroll = window.innerHeight - menu;

  if (scroll <= max_scroll) {
    var opacity = scroll / max_scroll;

    var menuElem = document.getElementById("menu");
    menuElem.style.backgroundColor = "rgb(0, 0, 210, " + opacity +")";

    menuElem.style.color = "white";
  }
}

window.onscroll = function () {
  changeOpacity() ;
}

document.addEventListener("DOMContentLoaded", function () {

  function goBlack() {
    var menu = document.getElementById("menu");
    menu.style.backgroundColor = "black";
  }

  var links = document.querySelectorAll("#menu a[href^=`#´]");
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", goBlack);
  }
} );

// FAQ
const icons = document.querySelectorAll('.fa-plus');

icons.forEach(icon => {
  icon.addEventListener('click', () => {

    const respuesta = icon.parentElement.nextElementSibling;

    icon.classList.toggle('icon');

    respuesta.style.display = respuesta.style.display === 'none' || respuesta.style.display === '' ? 'block' : 'none';
  });
});

