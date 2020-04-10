const date = document.querySelector("#date");
function getDate() {
    console.log(date);
    const currentYear = new Date().getFullYear();
    date.textContent = currentYear;
  }
getDate();

mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction(); myFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 170 || document.documentElement.scrollTop > 170) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// When the user scrolls the page, execute myFunction
//window.onscroll = function() {myFunction()};

// Get the navbar
const navbar = document.getElementById("primary-navbar");

//Get th main div
const main = document.getElementById("main");

// Get the offset position of the navbar
let sticky = navbar.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
    main.classList.add("navbarPadding")
  } else {
    navbar.classList.remove("sticky");
    main.classList.remove("navbarPadding");
  }
}
