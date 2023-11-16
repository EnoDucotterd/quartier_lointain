import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.set(".slider-track", { x: "-48.25%" });
var tl = gsap.timeline();

tl.to(".slider-track", { x: "-53.45%", delay: 2, duration: 5 });
tl.to(".slider-track", { x: "-58.55%", delay: 2, duration: 5 });
tl.to(".slider-track", { x: "-63.7%", delay: 2, duration: 5 });
tl.to(".slider-track", { x: "-68.9%", delay: 2, duration: 5 });
tl.to(".slider-track", { x: "-74.1%", delay: 2, duration: 5 });
tl.to(".slider-track", { x: "-79.25%", delay: 2, duration: 5 });
tl.to(".slider-track", { x: "-84.4%", delay: 2, duration: 5 });
tl.to(".slider-track", { x: "-89.6%", delay: 2, duration: 5 });
tl.to(".slider-track", { x: "-94.78%", delay: 2, duration: 5 });
tl.to(".slider-track", { x: "0%", delay: 2, duration: 10 });
tl.to(".slider-track", { x: "-5.2%", delay: 2, duration: 5 });
tl.to(".slider-track", { x: "-10.3%", delay: 2, duration: 5 });
tl.to(".slider-track", { x: "-15.46%", delay: 2, duration: 5 });
tl.to(".slider-track", { x: "-20.63%", delay: 2, duration: 5 });
tl.to(".slider-track", { x: "-25.78%", delay: 2, duration: 5 });

// tl.to(".slider-track", { x: "-94.78%", delay: 2, duration: 5 });
// tl.to(".slider-track", { x: "0%", delay: 2, duration: 10 });
// tl.to(".slider-track", { x: "-10.3%", delay: 2, duration: 5 });
// tl.to(".slider-track", { x: "-25.75%", delay: 2, duration: 5 });
