import { animate, hover, inView, scroll, stagger } from "./vendor/motion.js";

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let clickContext = null;
let clickBuffer = null;
let lastSound = 0;

function audioContext() {
  const AudioCtor = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtor) return null;
  if (!clickContext) {
    clickContext = new AudioCtor();
  }
  if (clickContext.state === "suspended") {
    clickContext.resume();
  }
  return clickContext;
}

function ensureClickBuffer(context) {
  if (clickBuffer && clickBuffer.sampleRate === context.sampleRate) {
    return clickBuffer;
  }

  const rate = context.sampleRate;
  const length = Math.floor(rate * 0.006);
  const buffer = context.createBuffer(1, length, rate);
  const channel = buffer.getChannelData(0);

  for (let i = 0; i < length; i += 1) {
    const t = i / length;
    const sine = Math.sin(2 * Math.PI * 3400 * t);
    const noise = Math.random() * 2 - 1;
    channel[i] = (sine * 0.6 + noise * 0.4) * (1 - t) ** 3;
  }

  clickBuffer = buffer;
  return buffer;
}

function playToggleSound() {
  const now = performance.now();
  if (now - lastSound < 80) return;
  lastSound = now;

  try {
    const context = audioContext();
    if (!context) return;
    const source = context.createBufferSource();
    const gain = context.createGain();
    source.buffer = ensureClickBuffer(context);
    gain.gain.value = 0.08;
    source.connect(gain);
    gain.connect(context.destination);
    source.start();
  } catch {
    // Theme animation should never fail because audio is unavailable.
  }
}

function syncThemeToggle(theme, instant = false) {
  const isDark = theme === "dark";
  const transition = instant || reducedMotion ? { duration: 0 } : { type: "spring", stiffness: 380, damping: 30 };
  const svg = document.querySelector("[data-theme-svg]");
  const body = document.querySelector("[data-theme-body]");
  const maskCut = document.querySelector("[data-theme-mask-cut]");
  const rays = document.querySelector("[data-theme-rays]");

  if (svg) {
    animate(svg, { rotate: isDark ? 270 : 0 }, transition);
  }

  if (body) {
    animate(body, { r: isDark ? 9 : 5 }, transition);
  }

  if (maskCut) {
    animate(maskCut, { cx: isDark ? 17 : 33, cy: isDark ? 8 : 0 }, transition);
  }

  if (rays) {
    animate(
      rays,
      { opacity: isDark ? 0 : 1, scale: isDark ? 0 : 1, rotate: isDark ? -30 : 0 },
      transition
    );
  }
}

syncThemeToggle(document.documentElement.dataset.theme, true);

window.addEventListener("portfolio-theme-change", (event) => {
  const { theme, initial } = event.detail || {};
  syncThemeToggle(theme || document.documentElement.dataset.theme, Boolean(initial));
  if (!initial) {
    playToggleSound();
  }
});

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

  hover(".button, .filter-button, .skill-button, .theme-toggle", (element) => {
    animate(element, { scale: 1.025 }, { duration: 0.16, easing: "ease-out" });
    return () => animate(element, { scale: 1 }, { duration: 0.16, easing: "ease-out" });
  });

  const themeToggle = document.querySelector("[data-theme-toggle]");
  if (themeToggle) {
    themeToggle.addEventListener("pointerdown", () => {
      animate(themeToggle, { scale: 0.86 }, { duration: 0.12, easing: "ease-out" });
    });
    themeToggle.addEventListener("pointerup", () => {
      animate(themeToggle, { scale: 1 }, { type: "spring", stiffness: 400, damping: 25 });
    });
    themeToggle.addEventListener("pointerleave", () => {
      animate(themeToggle, { scale: 1 }, { duration: 0.16, easing: "ease-out" });
    });
  }
}
