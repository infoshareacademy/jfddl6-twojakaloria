const menu = document.querySelector(".nav");
const menuButton = document.querySelector(".button-box");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("nav--active");
});
