const header = document.querySelector("[data-header]");
const revealTargets = [...document.querySelectorAll(".reveal, .comparison")];
const heroBackground = document.querySelector(".hero-bg");

const updateHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 24);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

let revealTicking = false;

const syncReveal = () => {
  const threshold = window.innerHeight * 0.92;

  revealTargets.forEach((target) => {
    if (target.classList.contains("is-visible")) {
      return;
    }

    const rect = target.getBoundingClientRect();
    if (rect.top < threshold) {
      target.classList.add("is-visible");
    }
  });
};

const requestReveal = () => {
  if (revealTicking) {
    return;
  }

  revealTicking = true;
  window.requestAnimationFrame(() => {
    syncReveal();
    revealTicking = false;
  });
};

syncReveal();
window.addEventListener("scroll", requestReveal, { passive: true });
window.addEventListener("resize", requestReveal);

window.addEventListener(
  "pointermove",
  (event) => {
    if (!heroBackground || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const x = (event.clientX / window.innerWidth - 0.5) * 10;
    const y = (event.clientY / window.innerHeight - 0.5) * 8;
    heroBackground.style.transform = `scale(1.045) translate(${x}px, ${y}px)`;
  },
  { passive: true }
);
