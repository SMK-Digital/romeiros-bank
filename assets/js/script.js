// console.log("JavaScript está conectado e funcionando!");

// Inicializa o WOW.js
new WOW().init();

// Navbar fixa
$(window).on('scroll', function () {
    if ($(this).scrollTop() > 45) {
        $('.navbar').addClass('sticky-top shadow-sm');
    } else {
        $('.navbar').removeClass('sticky-top shadow-sm');
    }
});

//SWIPER JS
let swiperCards = new Swiper('.card__content', {
    loop: true,
    spaceBetween: 32,
    grabCursor: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints:{
        600:{
            slidesPerView:2,
        },
        968:{
            slidesPerView:3,
        },
    },
});
