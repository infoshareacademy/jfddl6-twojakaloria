//  menu

const menu = document.querySelector('.nav');
const menuButton = document.querySelector('.button-box');
const menuItems = document.querySelectorAll('.nav__item')

const hero = document.querySelector('#hero')
const features = document.querySelector('#features')
const more = document.querySelector('#more')
const team = document.querySelector('#team')
const sign = document.querySelector('#sign')

menuButton.addEventListener('click', () => {
    menu.classList.toggle('nav--active');
})

menuItems.forEach(element => {
    element.addEventListener('click', () => {
        menu.classList.remove('nav--active')
    })
})

const highlightMenu = () => {
    const section = document.querySelectorAll('.section')
    const sections = {}
    let i = 0

    Array.prototype.forEach.call(section, (e) => {
        sections[e.id] = e.offsetTop
    })

    window.onscroll = () => {
        let scrollPosition = window.scrollY + menu.clientHeight

        for (i in sections) {
            if (sections[i] <= scrollPosition) {
                document.querySelector('.nav__link--active').setAttribute('class', 'nav__link')
                document.querySelector('a[href*=' + i + ']').setAttribute('class', 'nav__link nav__link--active')
            }
        }
    }
}

window.addEventListener('scroll', highlightMenu)



// Cookies

if (localStorage.getItem('isCookiesAccepted', 'true')) {
    document.getElementById('cookies').classList.add('cookies__hidden');
}

function buttonClick() {
    localStorage.setItem('isCookiesAccepted', 'true');
    document.getElementById('cookies').classList.add('cookies__hidden');
}

document.getElementById('cookies__button').addEventListener('click', buttonClick);

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

