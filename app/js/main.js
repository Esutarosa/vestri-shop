/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
             nav = document.getElementById(navId)

    toggle.addEventListener('click', () => {
        nav.classList.toggle('show-menu')

        toggle.classList.toggle('show-icon')
    })
}
showMenu('nav-toggle', 'nav-menu')

/*=============== DROPDOWN ===============*/
const dropdownItems = document.querySelectorAll('.dropdown__item')

dropdownItems.forEach((item) => {
    const dropdownHeader = item.querySelector('.dropdown-header')

    dropdownHeader.addEventListener('click', () => {
        const openItem = document.querySelector('.dropdown-open')

        toggleItem(item)

        if (openItem && openItem !== item) {
             toggleItem(openItem)
        }
    })
})

const toggleItem = (item) => {
    const dropdownContent = item.querySelector('.dropdown__menu')

    if (item.classList.contains('dropdown-open')) {
        dropdownContent.removeAttribute('style')
        item.classList.remove('dropdown-open')
    } else {
        dropdownContent.style.height = dropdownContent.scrollHeight + 'px'
        item.classList.add('dropdown-open')
    }
}