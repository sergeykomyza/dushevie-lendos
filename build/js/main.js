

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ПРОКРУТКА, ШАПКА
// document.addEventListener('DOMContentLoaded', function () {
//     // СКРОЛЛ К НУЖНОЙ СЕКЦИИ ПО КЛИКУ НА ПУНКТАХ МЕНЮ
//     $('.menu__link').click(function () {
//         var scroll_elem = $(this).attr('href');
//         $('html, body').animate({
//             scrollTop: $(scroll_elem).offset().top
//         }, 1000);
//     });
//     // ДОБАВЛЯЕМ АКТИВНЫЙ КЛАСС ШАПКЕ
//     function headerActiveToggle() {
//         const scrollSize = window.pageYOffset
//         scrollSize > 1 ? header.classList.add('active') : header.classList.remove('active')
//     }
//     window.addEventListener('load', headerActiveToggle) // ПРИ ПЕРЕЗАГРУЗКЕ СТРАНИЦЫ ЕСЛИ СТРАНИЦА УЖЕ ПРОСКРОЛЛЕНА
//     window.addEventListener('scroll', headerActiveToggle) // ПРИ СКРОЛЛЕ
// });

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ МАСКА ДЛЯ ИНПУТОВ (https://github.com/RobinHerbots/Inputmask)
const inputMask = () => {
    Inputmask({"mask": "+7 999 999 99 99"}).mask('.js-maskPhone');
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ СЛАЙДЕР SWIPER (https://swiperjs.com/get-started) 
const sliders = () => {
    const sliderPresent = new Swiper('.js-sliderPresent', {
        loop: true,
        autoplay: true,
        effect: "fade",
    });
    const sliderCases = new Swiper('.js-sliderCases', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: '.js-paginationCases',
            clickable: true
        },
        navigation: {
            nextEl: '.js-casesNext',
            prevEl: '.js-casesPrev',
        },
        breakpoints: {
            566: {
                slidesPerView: 3,
            },
        }
    });
    const sliderSteps = new Swiper('.js-sliderSteps', {
        loop: true,
        autoplay: true,
        effect: "fade",
    });
    const sliderReviews = new Swiper('.js-sliderReviews', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 13,
        pagination: {
            el: '.js-paginationReviews',
            clickable: true
        },
        navigation: {
            nextEl: '.js-reviewsNext',
            prevEl: '.js-reviewsPrev',
        },
        breakpoints: {
            1101: {
                slidesPerView: 4,
            },
            880: {
                slidesPerView: 3,
            },
            661: {
                slidesPerView: 2,
            },
        }
    });
}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ACCORDION (https://github.com/panzoom/accordion)
const accordeon = () => {
    document.querySelector('.faq__box').addEventListener('click', (e) => {
        const item = e.target.closest('.faq__item')
        const btn = item.querySelector('.faq__button')
        const body = item.querySelector('.faq__contentbox')
        if(item){
            item.classList.toggle('is-active')
        }
    })
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
sliders()
inputMask()
accordeon()
