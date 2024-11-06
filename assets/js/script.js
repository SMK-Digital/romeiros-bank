// console.log("JavaScript está conectado e funcionando!");

// Inicializa o WOW.js
new WOW().init();

// Função para carregar componentes
function loadComponent(id, file) {
    let element = document.getElementById(id);
    if (!element) {
        console.error(`Elemento com ID ${id} não encontrado.`);
        return Promise.reject(new Error(`Elemento com ID ${id} não encontrado.`));
    }
    
    return fetch(file)  // Retorna a Promise
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro ao carregar ${file}: ${response.statusText}`);
            }
            return response.text();
        })
        .then(data => {
            element.innerHTML = data; // Define o conteúdo carregado
        })
        .catch(error => {
            console.error(`Erro ao carregar componente ${file}:`, error);
        });
}


// Carregar os componentes na página
document.addEventListener("DOMContentLoaded", function() {
    Promise.all([
        loadComponent('header-placeholder', 'components/header.html'),
        // loadComponent('hero-placeholder', 'components/hero.html'),
        // loadComponent('sections-placeholder', 'components/sections.html'),
        loadComponent('footer-placeholder', 'components/footer.html')
    ]).then(() => {
        // Inicializa a navbar após carregar os componentes
        initializeNavbarToggle();
    });
});

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
