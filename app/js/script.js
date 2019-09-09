// -------------Nav Hamburger--------------
let navSlide = ()=> {
    let burger = document.querySelector('.main_nav-burger');
    let nav = document.querySelector('.main_nav');

    burger.addEventListener('click', ()=> {
        nav.classList.toggle('nav-active');
    })
}

navSlide();