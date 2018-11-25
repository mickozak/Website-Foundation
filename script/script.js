/*START MOBILE MENU*/

let burgerNavT = document.querySelector('.burger-mobile-nav-menu');
let headerMenuT = document.querySelector('.header-mobile-nav-menu');

const openMenuT = () => {
    if (headerMenuT.classList.contains('open')) {
        headerMenuT.classList.remove('open');
        headerMenuT.style.removeProperty("height")
    } else {
        headerMenuT.classList.add('open');
        headerMenuT.style.height="auto"
    }
};

burgerNavT.addEventListener('click',openMenuT);

/*END MOBILE MENU*/

