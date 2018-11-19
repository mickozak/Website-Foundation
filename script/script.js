/*START MOBILE MENU*/

let burgerNav = document.querySelector('.burger-nav');
let headerMenu = document.querySelector('.header-menu');

const openMenu = () => {
    if (headerMenu.classList.contains('open')) {
        headerMenu.classList.remove('open');
        headerMenu.style.removeProperty("height")
    } else {
        headerMenu.classList.add('open');
        headerMenu.style.height="auto"
    }
};

burgerNav.addEventListener('click',openMenu);

/*END MOBILE MENU*/
