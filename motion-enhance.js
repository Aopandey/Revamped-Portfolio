import { animate, hover, inView, scroll, stagger } from "./vendor/motion.js";

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!reducedMotion) {
  const progressBar = document.querySelector("[data-scroll-progress]");
  if (progressBar) {
    scroll((progress) => {
      progressBar.style.transform = `scaleX(${progress})`;
    });
  }

  animate(
    ".brand-mark",
    { scale: [0.92, 1], opacity: [0, 1] },
    { duration: 0.45, easing: [0.22, 1, 0.36, 1] }
  );

  animate(
    ".hero-copy > *",
    { opacity: [0, 1], y: [18, 0] },
    { delay: stagger(0.055), duration: 0.55, easing: [0.22, 1, 0.36, 1] }
  );

  animate(
    ".portrait-wrap",
    { opacity: [0, 1], y: [22, 0], scale: [0.985, 1] },
    { duration: 0.65, easing: [0.22, 1, 0.36, 1] }
  );

  inView(
    ".reveal",
    (element) => {
      element.classList.add("is-visible");
      animate(element, { opacity: [0, 1], y: [18, 0] }, { duration: 0.48, easing: [0.22, 1, 0.36, 1] });
    },
    { margin: "0px 0px -12% 0px" }
  );

  hover(".project-card, .mini-card, .publication-card, .status-card", (element) => {
    animate(element, { y: -5, scale: 1.006 }, { duration: 0.22, easing: [0.22, 1, 0.36, 1] });
    return () => animate(element, { y: 0, scale: 1 }, { duration: 0.2, easing: [0.22, 1, 0.36, 1] });
  });

  hover(".button, .filter-button, .skill-button", (element) => {
    animate(element, { scale: 1.025 }, { duration: 0.16, easing: "ease-out" });
    return () => animate(element, { scale: 1 }, { duration: 0.16, easing: "ease-out" });
  });
}


