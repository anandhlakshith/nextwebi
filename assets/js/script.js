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


// ------- count increase animation on scroll ------
$(function () {
    let animated = false;
  
    function animateNumbers() {
      $(".stat-number").each(function () {
        const $el = $(this);
        const target = parseInt($el.data("n"), 10);
        const suffix = $el.data("sym") || "";
  
        $({ count: 0 }).animate({ count: target }, {
          duration: 5000,
          step: function (now) {
            $el.text(Math.ceil(now) + suffix);
          },
          complete: function () {
            $el.text(target + suffix);
          }
        });
      });
    }
  
    function checkScrollTrigger() {
      const sectionTop = $("#aboutSection").offset().top;
      const scrollTop = $(window).scrollTop();
  
      if (!animated && scrollTop >= sectionTop) {
        animated = true;
        animateNumbers();
      }
    }
  
    $(window).on("scroll", checkScrollTrigger);
  });
  
  
