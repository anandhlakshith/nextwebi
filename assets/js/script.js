// -- hero section carousel --
var swiper = new Swiper(".heroSwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// -- ideas section carousel --
var swiper = new Swiper(".ideaSwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: false,
    // autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false,
    // },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// -- feedback section carousel --
var swiper = new Swiper(".feedbackSwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// ------- Navbar background color change onscroll ------
window.addEventListener('scroll',
    function () {
        const navbar = document.querySelector('.myNavbar');
        if (window.scrollY > 200) {
            navbar.classList.remove('bg-transparent', 'navbar-dark');
            navbar.classList.add('bg-dark', 'navbar-dark');
        } else {
            navbar.classList.remove('bg-dark', 'navbar-dark');
            navbar.classList.add('bg-transparent', 'navbar-dark');
        }
    });
