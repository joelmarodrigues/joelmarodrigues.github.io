var navToggle = document.getElementById("nav-toggle-btn");
var menu = document.querySelector(".menu");

navToggle.addEventListener("click", function () {
  menu.classList.toggle("show");
});

//Navigation Sticky
const nav = document.querySelector(".menu-sticky");

document.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
});


//Typing Text
const typedText = ["Hello, I'm Joelma Rodrigues, a designer and developer."];
const typingDelay = 80;
const erasingDelay = 30;
const newTextDelay = 1000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < typedText[textArrayIndex].length) {
    document.getElementById("typing-text").innerHTML += typedText[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    document.getElementById("typing-text").innerHTML = typedText[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    textArrayIndex++;
    if (textArrayIndex >= typedText.length) {
      textArrayIndex = 0;
    }
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(type, newTextDelay + 250);
});


//Carrousel
const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.slide');

// Set the width of the carousel based on the number of slides
carousel.style.width = (slides.length * 500) + (slides.length - 1) * 20 + 'px';

// Add event listener to scroll the carousel left or right when the user clicks the arrow buttons
document.querySelector('.scroll-left').addEventListener('click', function() {
  carousel.scrollLeft -= 500;
});

document.querySelector('.scroll-right').addEventListener('click', function() {
  carousel.scrollLeft += 500;
});
