

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ПРОКРУТКА, ШАПКА
const scroll = () => {
    const items = document.querySelectorAll('.js-scroll')
    items.forEach(item => {
        item.addEventListener('click', function(e){
            e.preventDefault()
            const targetName = this.getAttribute('href')
            window.scrollBy({
                top: document.querySelector(targetName).getBoundingClientRect().top, 
                behavior: "smooth" 
            });
        })
    })
}

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
        if(item){
            item.classList.toggle('is-active')
        }
    })
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ POPUP
const popup = ()=> {
    const popup = document.querySelectorAll('.popup')
    const popupBtn = document.querySelectorAll("[data-popup='popup']")
    popup.forEach(item => {
      item.addEventListener('click', function(e){
        let itsBody = e.target == item.querySelector('.popup__body') || item.querySelector('.popup__body').contains(e.target)
        let itsClose = e.target.closest('.js-popupClose')
        if(!itsBody || itsClose){
          item.querySelector('.popup__body').classList.remove('animate__zoomIn')
          item.querySelector('.popup__body').classList.add('animate__zoomOut')
          setTimeout(()=> {
            item.classList.remove('is-open')
          },500)
        }
      })
    })
    popupBtn.forEach(item => {
        item.addEventListener('click', function(e){
            e.preventDefault()
            const hrefPopupBtn = item.getAttribute('href') || item.getAttribute('data-src')
            document.documentElement.classList.add('popup-open')
            popup.forEach(item => {
                item.classList.remove('is-open')
            })
            document.querySelector(hrefPopupBtn).classList.add('is-open')
            document.querySelector(hrefPopupBtn).querySelector('.popup__body').classList.add('animate__zoomIn')
            document.querySelector(hrefPopupBtn).querySelector('.popup__body').classList.remove('animate__zoomOut')
        })
    })
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
scroll()
sliders()
inputMask()
accordeon()
popup()
