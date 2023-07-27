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
