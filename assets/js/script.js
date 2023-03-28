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
const typedText = ["Hello, I'm Joelma Rodrigues! Discover my talent as a designer and web developer."];
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