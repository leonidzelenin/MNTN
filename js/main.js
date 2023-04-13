const navBtn = document.querySelector('.nav-button');
const mobileNav = document.querySelector('.mobile-nav');
const body = document.body;

navBtn.addEventListener('click', function (event) {
    event.stopPropagation();
    mobileNav.classList.toggle ('mobile-nav-active');
    navBtn.classList.toggle ('nav-button-close');
    body.classList.toggle('no-scroll')
})

window.addEventListener('click', function () {
    console.log('Click on window')

    if (body.classList.contains('no-scroll')) {
        body.classList.toggle('no-scroll')
        navBtn.classList.toggle ('nav-button-close');
        mobileNav.classList.toggle ('mobile-nav-active');

    }
})

mobileNav.addEventListener ('click', function (event) {
    event.stopPropagation()
})