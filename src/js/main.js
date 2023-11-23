import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cursor = document.querySelector("#cursor");
gsap.set(".ball", { xPercent: -50, yPercent: -50 });

const ball = document.querySelector(".cursor");
const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
const mouse = { x: pos.x, y: pos.y };
const speed = 0.2;

const xSet = gsap.quickSetter(ball, "x", "px");
const ySet = gsap.quickSetter(ball, "y", "px");

// Ajouter un écouteur d'événement pour la souris
window.addEventListener("mousemove", (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});

// Ajouter un écouteur d'événement pour le survol de la classe "slider-button"
const sliderButtons = document.querySelectorAll(".slider-button");

sliderButtons.forEach((sliderButton) => {
  sliderButton.addEventListener("mouseenter", () => {
    ball.style.display = "none"; // Masquer le curseur lorsque la souris entre dans ".slider-button"
  });

  sliderButton.addEventListener("mouseleave", () => {
    ball.style.display = "block"; // Afficher à nouveau le curseur lorsque la souris quitte ".slider-button"
  });
});

gsap.ticker.add(() => {
  // ajuster la vitesse pour un rafraîchissement plus élevé des moniteurs
  const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());

  pos.x += (mouse.x - pos.x) * dt;
  pos.y += (mouse.y - pos.y) * dt;
  xSet(pos.x);
  ySet(pos.y);
});

// go down

document.addEventListener("DOMContentLoaded", function () {
  const hideElement = document.getElementById("hide");

  hideElement.addEventListener("click", function () {
    // Ajouter la classe "hide" pour masquer l'élément après le clic
    hideElement.classList.add("hide");

    // Utiliser window.scrollTo pour faire défiler la page d'un écran
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  });
});

var html = document.querySelector("html");

// Ciblage des boutons dans le document
// (le chiffre correspond à la séquence sur laquelle se trouve le bouton)
var button1 = document.querySelector("#button-1");
var button2 = document.querySelector("#button-2");
var button3 = document.querySelector("#button-3");
var button4 = document.querySelector("#button-4");

// On crée autant de verrous que de boutons
// (le chiffre correspond à la séquence qui est verrouillée)
var lock1 = true;
var lock2 = true;
var lock3 = true;
var lock4 = true;

// Création de la timeline principale
var tlMain = gsap.timeline({
  scrollTrigger: {
    trigger: ".slider-mask",
    start: "top top",
    end: "2000%",
    pin: true,
    // markers: true,
    scrub: 1,
  },
});

// Déplacement initial du slider
tlMain.set(".slider-track", {
  x: "-48.3%",
});

// Déplacement du slider de 1 écran vers la droite
tlMain.to(".slider-track", {
  duration: 0.5,
  onComplete: () => {
    if (lock1) {
      // Si le verrou 5 est actif
      html.style.overflow = "hidden"; // Le scroll est bloqué
      ball.style.display = "none"; // Masquer le curseur lorsque la souris entre dans ".slider-button"
    }
  },
});

// Déplacement du slider de 1 écran vers la droite
tlMain.to(".slider-track", {
  x: "-84.4%",
  duration: 3,
  ease: "power1.inOut",
  onComplete: () => {
    if (lock2) {
      // Si le verrou 5 est actif
      html.style.overflow = "hidden"; // Le scroll est bloqué
      ball.style.display = "none"; // Masquer le curseur lorsque la souris entre dans ".slider-button"
    }
  },
});

// tlMain.to({}, { duration: 1 });

// Déplacement du slider de 1 écran vers la droite
tlMain.to(".slider-track", {
  x: "-94.78%",
  duration: 3,
  ease: "power1.inOut",
});

tlMain.to({}, { duration: 0.5 });

// Retour du slider totalement à gauche
tlMain.to(".slider-track", {
  x: "0%",
  duration: 3,
  ease: "power1.inOut",
  onComplete: () => {
    if (lock2) {
      // Si le verrou 1 est actif
      html.style.overflow = "hidden"; // Le scroll est bloqué
      ball.style.display = "none"; // Masquer le curseur lorsque la souris entre dans ".slider-button"
    }
  },
});

tlMain.to({}, { duration: 0.5 });

// Déplacement du slider de 1 écran vers la droite
tlMain.to(".slider-track", {
  x: "-10.3%",
  duration: 3,
  ease: "power1.inOut",
  onComplete: () => {
    if (lock3) {
      // Si le verrou 2 est actif
      html.style.overflow = "hidden"; // Le scroll est bloqué
      ball.style.display = "none"; // Masquer le curseur lorsque la souris entre dans ".slider-button"
    }
  },
});

tlMain.to({}, { duration: 0.5 });

// Déplacement du slider de 1 écran vers la droite
tlMain.to(".slider-track", {
  x: "-25.5%",
  duration: 4,
  ease: "power1.inOut",
  onComplete: () => {
    if (lock4) {
      // Si le verrou 2 est actif
      html.style.overflow = "hidden"; // Le scroll est bloqué
      ball.style.display = "none"; // Masquer le curseur lorsque la souris entre dans ".slider-button"
    }
  },
});

tlMain.to({}, { duration: 0.5 });

button1.addEventListener("click", () => {
  html.style.overflow = "auto"; // Le scroll est débloqué
  lock1 = false; // Le verrou 1 est désactivé
});

button2.addEventListener("click", () => {
  html.style.overflow = "auto"; // Le scroll est débloqué
  lock2 = false; // Le verrou 2 est désactivé
});

button3.addEventListener("click", () => {
  html.style.overflow = "auto"; // Le scroll est débloqué
  lock3 = false; // Le verrou 5 est désactivé
});
button4.addEventListener("click", () => {
  html.style.overflow = "auto"; // Le scroll est débloqué
  lock4 = false; // Le verrou 5 est désactivé
});
//CURSOR ANIMATION

document.addEventListener("DOMContentLoaded", function () {});
