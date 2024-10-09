//! ████████████████████████████████████  SWIPER

const swiper = new Swiper(".swiper", {
  // Optional parameters
  autoplay: {
    delay: 6500,
  },
  pagination: {
    el: "#swiper-1 .swiper-pagination",
    clickable: true,
  },
  lazyloading: true,
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//! ████████████████████████████████████  VARIABLES fadeInOut
const x0 = document.getElementById("product-ua-foreground__0");
const x1 = document.getElementById("product-ua-foreground__1");
const x2 = document.getElementById("product-ua-foreground__2");
const x3 = document.getElementById("product-ua-foreground__3");
const FADE = 1000;
const STATIC = 4000;
var opacity__0 = 0;
var opacity__1 = 0;
var opacity__2 = 0;
var opacity__3 = 0;
// var element = document.querySelector('.product-ua-foreground');

//! ████████████████████████████████████  FUNCTIONS sleep, fadeIn, fadeOut, tripleJuggler

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function fadeIn() {
}
function fadeOut() {

}
function shortInterval(){
}
function longInterval(){
}

function updateOpacities() {
console.log(opacity__0, opacity__1, opacity__2, opacity__3 + 2);
  x1.style.opacity = opacity__0;
  x1.style.opacity = opacity__1;
  x1.style.opacity = opacity__2;
  x1.style.opacity = opacity__3;
}

function fadeInOut() {
  console.log(opacity__0, opacity__1);

  updateOpacities();
  console.log("4-21-24-1252");

  console.log();
  if (opacity__1 <1) {

    opacity__1 += 0.1;
    opacity__0 -= 0.1;

    updateOpacities()

  } else {
    opacity__1 = 1;
    opacity__0 = 0;
  }
fadeOut();


}



function tripleJuggler() {
  fadeInOut();
  // fadeInOut(1, 0);
  // fadeInOut(2, 1);
  // fadeInOut(3, 2);
  // fadeInOut(0, 3);
}

tripleJuggler()
// for whichOne = 1; whichOne < 4; whichOne++ {
  
// }
// const x = document.getElementById("product-ua-foreground__1");

// if (x.style.display === "none") {
//   x.style.display = "block";
// } else {
//   x.style.opacity = 0.5;
// }

// function fadeOut(theElement) {
//   var opacity = 1; // Initial opacity
//  console.log(opacity);
// var interval = setInterval(function(){
//   if (opacity > 0) {

//   opacity -= 0.1;
// theElement.style.opacity = opacity;
//   } else {
//     clearInterval(interval);
//     theElement.style.display = 'none';
//   }
//   }, 50);

// fadeOut(element);
// console.log("hello2");
