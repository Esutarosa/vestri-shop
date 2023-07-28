/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

const toggleNavMenu = () => {
    navMenu.classList.toggle('show-menu');
}

if (navToggle && navClose) {
    navToggle.addEventListener('click', toggleNavMenu);
    navClose.addEventListener('click', toggleNavMenu);
}

/*=============== DROPDOWN ===============*/


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(x => x.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('bg-header')
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SWIPER HOME ===============*/
const popularSwiper = new Swiper('.home__container', {
    slidesPerView: 'auto',
    centeredSlides: true,
    loop: true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    autoplay: {
        delay: 2500,
    }
})