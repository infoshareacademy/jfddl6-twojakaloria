const menu = document.querySelector('.nav');
const menuButton = document.querySelector('.button-box');

menuButton.addEventListener('click', function() {
    menu.classList.toggle('nav--active');
})
