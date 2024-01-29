/*~~~~~~~~~~~~~~~ TOGGLE BUTTON ~~~~~~~~~~~~~~~*/
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navClose = document.getElementById('nav-close');
const navLinkAll = document.querySelectorAll('.nav__link');

navLinkAll.forEach(link =>
    link.addEventListener('click', () => {
        navMenu.classList.add('hidden');
    })
)

hamburger.addEventListener('click', () => {
    navMenu.classList.remove('hidden');
});

navClose.addEventListener('click', () => {
    navMenu.classList.add('hidden');
});

/*~~~~~~~~~~~~~~~ TABS ~~~~~~~~~~~~~~~*/
const tabs = document.querySelectorAll('.tabs-wrap ul li');
const all = document.querySelectorAll('.item-wrap');
const food = document.querySelectorAll('.food');
const snack = document.querySelectorAll('.snack');
const beverage = document.querySelectorAll('.beverage');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(tab => {
            tab.classList.remove('active');
        })
        tab.classList.add('active');

        const tabVal = tab.getAttribute('data-tabs');
        
        all.forEach(item => {
            item.style.display = 'none';
        })

        if (tabVal == 'food') {
            food.forEach(item => {
                item.style.display = 'block';
            })
        }
        else if (tabVal == 'snack') {
            snack.forEach(item => {
                item.style.display = 'block';
            })
        }
        else if (tabVal == 'beverage') {
            beverage.forEach(item => {
                item.style.display = 'block';
            })
        }
        else  {
            all.forEach(item => {
                item.style.display = 'block';
            })
        }
    })
})

/*~~~~~~~~~~~~~~~ DARK LIGHT THEME ~~~~~~~~~~~~~~~*/
const html = document.querySelector('html');
const themeBtn = document.getElementById('theme-toggle');

if(localStorage.getItem('mode') == 'dark') {
    darkMode();
} else {
    lightMode();
}

themeBtn.addEventListener('click', (e) => {
if(localStorage.getItem('mode') == 'light'){
    darkMode();
} else {
    lightMode();
}
});

function darkMode  () {
    html.classList.add('dark');
    themeBtn.classList.replace('ri-moon-line', 'ri-sun-line');
    localStorage.setItem('mode', 'dark');
}

function lightMode  () {
    html.classList.remove('dark');
    themeBtn.classList.replace('ri-sun-line', 'ri-moon-line');
    localStorage.setItem('mode', 'light');
}

/*~~~~~~~~~~~~~~~ SHOW SCROLL UP ~~~~~~~~~~~~~~~*/
const scrollUp = () => {
    const scrollUpBtn = document.getElementById('scroll-up');

    if(this.scrollY >= 250){
        scrollUpBtn.classList.remove('-bottom-1/2');
        scrollUpBtn.classList.add('bottom-4');
    } else{
        scrollUpBtn.classList.add('-bottom-1/2');
        scrollUpBtn.classList.remove('bottom-4');
    }
}
window.addEventListener('scroll', scrollUp);

/*~~~~~~~~~~~~~~~ CHANGE BACKGROUND HEADER ~~~~~~~~~~~~~~~*/
const scrollHeader = () => {
    const header = document.getElementById('header');

    if(this.scrollY >= 50){
        header.classList.add('border-b', 'border-secondaryColor');
    } else{
        header.classList.remove('border-b', 'border-secondaryColor');
    }
}
window.addEventListener('scroll', scrollHeader);

/*~~~~~~~~~~~~~~~ SCROLL SECTIONS ACTIVE LINK ~~~~~~~~~~~~~~~*/
const activeLink = () => {
    const section = document.querySelectorAll('section');
    const navLink = document.querySelectorAll('.nav__link');

    let current = 'home';

    section.forEach(section => {
        const sectionTop = section.offsetTop;
        if(this.scrollY >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navLink.forEach((item) => {
        item.classList.remove('text-secondaryColor');
        if(item.href.includes(current)) {
            item.classList.add('text-secondaryColor');
        }
    })
};
window.addEventListener('scroll', activeLink);

/*~~~~~~~~~~~~~~~ SCROLL REVEAL ANIMATION ~~~~~~~~~~~~~~~*/
const sr = scrollReveal ({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
});

sr.reveal('.home__image');
sr.reveal('.home__content', {origin:'bottom'});

sr.reveal('.category__card', {interval: 300});

sr.reveal('.promo__card-1', {origin:'left'});
sr.reveal('.promo__card-2', {origin:'right'});

sr.reveal('.about__img', {origin:'bottom'});
sr.reveal('.about__content', {origin:'top'});

sr.reveal('.menu__item', {origin:'left'});

sr.reveal('.customer__review', {origin:'right'});

sr.reveal('.footer');
