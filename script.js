// --- GLOBAL VARIABLES ---
let vantaEffect;

// --- HEADER & NAVBAR ---
const header = document.querySelector("header");
const menu = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => header.classList.toggle("shadow", window.scrollY > 0));
menu.onclick = () => navbar.classList.toggle("active");
window.onscroll = () => navbar.classList.remove("active");

// --- DYNAMIC VANTA.JS BACKGROUND ---
const lightThemeVanta = { el: "#home", mouseControls: true, touchControls: true, gyroControls: false, minHeight: 200.00, minWidth: 200.00, scale: 1.00, scaleMobile: 1.00, color: 0x9d4edd, backgroundColor: 0xfaf9f6, points: 13.00, maxDistance: 12.00, spacing: 17.00 };
const darkThemeVanta = { el: "#home", mouseControls: true, touchControls: true, gyroControls: false, minHeight: 200.00, minWidth: 200.00, scale: 1.00, scaleMobile: 1.00, color: 0x9d4edd, backgroundColor: 0x0D0C1D, points: 13.00, maxDistance: 12.00, spacing: 17.00 };

function setVantaTheme(theme) {
    if (vantaEffect) vantaEffect.destroy();
    vantaEffect = VANTA.NET(theme === 'light' ? lightThemeVanta : darkThemeVanta);
}

// --- LIGHT/DARK MODE TOGGLE ---
const lightModeIcon = document.querySelector("#light-mode-icon");
lightModeIcon.onclick = () => {
    const isLight = document.body.classList.toggle("light-mode");
    lightModeIcon.className = isLight ? 'bx bx-moon' : 'bx bx-sun';
    const newTheme = isLight ? 'light' : 'dark';
    localStorage.setItem("theme", newTheme);
    setVantaTheme(newTheme);
};

// Check for saved theme on page load
const savedTheme = localStorage.getItem("theme") || 'dark';
if (savedTheme === "light") {
    document.body.classList.add("light-mode");
    lightModeIcon.className = 'bx bx-moon';
}
setVantaTheme(savedTheme);

// --- AURA CURSOR ---
const cursor = document.querySelector(".cursor");
const interactiveElements = document.querySelectorAll("a, button, .btn, .logo, i, .about-img");
window.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});
interactiveElements.forEach(el => {
    el.addEventListener("mouseover", () => cursor.classList.add("hover"));
    el.addEventListener("mouseout", () => cursor.classList.remove("hover"));
});

// --- SCROLL REVEAL ANIMATIONS ---
const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // Animates only once
    }
  });
}, { threshold: 0.1 });
revealElements.forEach(el => revealObserver.observe(el));