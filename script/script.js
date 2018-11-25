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

/*START SLIDER*/
$(document).ready(function(){
    $('.slider').bxSlider({
        mode: 'fade',
        speed: 250,
        responsive: true,
        auto: true,
        autoControls: true,

    });
});
/*STOP SLIDER*/