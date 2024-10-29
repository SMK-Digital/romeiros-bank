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
