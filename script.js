let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");



window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
};

// Dark Mode / light mode
//let darkmode = document.querySelector("#darkmode");

/*darkmode.onclick = () => {
  if (darkmode.classList.contains("bx-moon")) {
    darkmode.classList.replace("bx-moon", "bx-sun");
    document.body.classList.add("active");
  } else {
    darkmode.classList.replace("bx-sun", "bx-moon");
    document.body.classList.remove("active");
  }
};*/

const text = "I am a passionate tech fanatic constantly seeking to broaden my knowledge and skills."
const delay = 100; // delay between each character (in milliseconds)

let index = 0;
function type() {
  const element = document.getElementById("text");
  element.textContent += text[index];
  index++;
  if (index >= text.length) {
    clearInterval(intervalId);
  }
}

const intervalId = setInterval(type, delay);


VANTA.NET({
  el: "#home ",
  mouseControls: true,
  touchControls: true,
  gyroControls: true,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0x9d4edd,
  backgroundColor: 0x10002b,
  points: 13.00,
  maxDistance: 12.00,
  spacing: 17.00
})


 
