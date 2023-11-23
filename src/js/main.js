import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// gsap.set("body", { y: "0" });
// var tl = gsap.timeline();

// tl.to("body", { y: "-32.5%", delay: 5, duration: 5 });

//

// gsap.set(".slider-track", { x: "-48.25%" });
// var tl = gsap.timeline();

// tl.to(".slider-track", { x: "-53.45%", delay: 2, duration: 5 });
// tl.to(".slider-track", { x: "-58.55%", delay: 2, duration: 5 });
// tl.to(".slider-track", { x: "-63.7%", delay: 2, duration: 5 });
// tl.to(".slider-track", { x: "-68.9%", delay: 2, duration: 5 });
// tl.to(".slider-track", { x: "-74.1%", delay: 2, duration: 5 });
// tl.to(".slider-track", { x: "-79.25%", delay: 2, duration: 5 });
// tl.to(".slider-track", { x: "-84.4%", delay: 2, duration: 5 });
// tl.to(".slider-track", { x: "-89.6%", delay: 2, duration: 5 });
// tl.to(".slider-track", { x: "-94.78%", delay: 2, duration: 5 });
// tl.to(".slider-track", { x: "0%", delay: 2, duration: 10 });
// tl.to(".slider-track", { x: "-5.2%", delay: 2, duration: 5 });
// tl.to(".slider-track", { x: "-10.3%", delay: 2, duration: 5 });
// tl.to(".slider-track", { x: "-15.46%", delay: 2, duration: 5 });
// tl.to(".slider-track", { x: "-20.63%", delay: 2, duration: 5 });
// tl.to(".slider-track", { x: "-25.78%", delay: 2, duration: 5 });

// tl.to(".slider-track", { x: "-94.78%", delay: 2, duration: 5 });
// tl.to(".slider-track", { x: "0%", delay: 2, duration: 10 });
// tl.to(".slider-track", { x: "-10.3%", delay: 2, duration: 5 });
// tl.to(".slider-track", { x: "-25.75%", delay: 2, duration: 5 });

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
    markers: true,
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
    }
  },
});

tlMain.to({}, { duration: 0.5 });

// tlMain.to(".slider-track", {
//   x: "-25.78",
//   duration: 4,
//   ease: "power1.inOut",
//   onComplete: () => {
//     if (lock4) {
//       // Si le verrou 4 est actif
//       html.style.overflow = "hidden"; // Le scroll est bloqué
//     }
//   },
// });
// tlMain.to({}, { duration: 1 });

// // Déplacement du slider de 1 écran vers la droite
// tlMain.to(".slider-track", {
//   x: "-25.75%%",
//   duration: 3,
//   ease: "power1.inOut",
// });

// Fin des déplacements

// Au clic sur les boutons

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

document.addEventListener("DOMContentLoaded", function () {});
