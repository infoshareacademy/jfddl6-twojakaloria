const menu = document.querySelector('.instruction');
const menuButton = document.querySelector('.button-box');

menuButton.addEventListener('click', function() {
    menu.classList.toggle('instruction--active');
})
