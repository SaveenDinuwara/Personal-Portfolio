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
const lightThemeVanta = {
    el: "#home",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    highlightColor: 0xe8e1f2, // Morning Mist highlight
    midtoneColor: 0xc5b0d9,   // Morning Mist midtone
    lowlightColor: 0xe0d8f0,  // Morning Mist lowlight
    baseColor: 0xfaf9f6,      // Must match --bg-color
    blurFactor: 0.60,
    speed: 1.20,
    zoom: 0.80
};
const darkThemeVanta = {
    el: "#home",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    highlightColor: 0x5a189a, // Deep Nebula highlight
    midtoneColor: 0x3D1E6D,   // Deep Nebula midtone
    lowlightColor: 0x190d2e,  // Deep Nebula lowlight
    baseColor: 0x0D0C1D,      // Must match --bg-color
    blurFactor: 0.60,
    speed: 1.20,
    zoom: 0.80
};

function setVantaTheme(theme) {
    if (vantaEffect) vantaEffect.destroy();
    // UPDATED: Using the final, most aesthetic FOG effect
    vantaEffect = VANTA.FOG(theme === 'light' ? lightThemeVanta : darkThemeVanta);
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
const interactiveElements = document.querySelectorAll("a, button, .btn, .logo, i, .about-img, .skill-card, .contact-link-item:not(.non-interactive)");
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

// --- Email Copy to Clipboard ---
const emailLink = document.querySelector("#email-link");
const emailDetailSpan = emailLink.querySelector(".contact-detail");
emailLink.addEventListener("click", () => {
    const originalText = emailDetailSpan.dataset.originalText;
    navigator.clipboard.writeText(originalText).then(() => {
        emailDetailSpan.textContent = "Copied!";
        setTimeout(() => {
            emailDetailSpan.textContent = originalText;
        }, 2000); // Revert back after 2 seconds
    }).catch(err => {
        console.error('Failed to copy text: ', err);
        // Fallback for browsers that don't support it
        window.location.href = `mailto:${originalText}`;
    });
});