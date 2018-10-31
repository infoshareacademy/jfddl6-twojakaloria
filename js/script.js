// Toggling menu

const menu = document.querySelector('.nav');
const menuButton = document.querySelector('.button-box');

menuButton.addEventListener('click', () => {
    menu.classList.toggle('nav--active');
})

// Price calculating functionality

const price = document.querySelector('.section-price__value')

const range = document.querySelector('.section-price__range');
const checkboxes = document.querySelectorAll('.section-price__checkbox')
const free = document.getElementById('free');

if (free.checked === true) {
    range.addEventListener('change', () => {
        price.textContent = range.value;
    });
} 



