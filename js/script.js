// Toggling menu

const menu = document.querySelector('.nav');
const menuButton = document.querySelector('.button-box');

menuButton.addEventListener('click', () => {
    menu.classList.toggle('nav--active');
})

// Price calculating functionality

const price = document.querySelector('.section-price__price')
const persons = document.querySelector('.section-price__value');
const range = document.querySelector('.section-price__range')
const checkboxFree = document.querySelector('.section-price__check--free');
const checkboxPremium = document.querySelector('.section-price__check--premium')

const calculatePrice = () => {
    price.textContent = ((parseInt(persons.textContent, 10) * 5) + '$')
}


range.addEventListener('change', () => {
    persons.textContent = range.value;
    if (checkboxPremium.checked) {
        calculatePrice();
    }
});

checkboxPremium.addEventListener('change', () => {
    calculatePrice();
})


checkboxFree.addEventListener('change', () => {
    if (checkboxFree.checked) {
        price.textContent = range.value * 0 + '$';
    }
})