$(document).ready(function () {

    const buttomMenu = $('.menu-button-js');
    const siteNav = $('.header__nav-js');
    const headerWrap = $('.header');
    const btnUp = $('.btn-up');
    let flag = true;

    // Створюємо елементи для кнопки "бургер"
    for (let i = 0; i < 3; i++) {
        buttomMenu.append(document.createElement('div'));
    }

    // Фіксуємо шапку при скролі сторінки
    $(window).on('scroll', () => pageYOffset > 10 ? headerWrap.addClass('scroll') : headerWrap.removeClass('scroll'));

    // Показуємо/ховаємо кнопку "піднятися вгору" при скролі сторінки
    $(window).on('scroll', () => pageYOffset > 200 ? btnUp.fadeIn() : btnUp.fadeOut());

    // Плавна анімація "підняття вгору" при натисканні на кнопку
    btnUp.on('click', (e) => {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, '300');
    });

    // Показуємо/ховаємо навігацію сайта при натисненні на кнопку "бургер"
    buttomMenu.on('click', () => {
        if (flag) {
            showSiteMenu();
            flag = false; //flag використовуємо для повторного натиснення на кнопку
        } else {
            hideSiteMenu();
            flag = true; //flag використовуємо для повторного натиснення на кнопку
        }
    });

    // Функція показу навігацію сайту та анімація натискання на кнопку "бургер"
    function showSiteMenu() {
        buttomMenu.css({
            'transform': 'rotate(90deg)'
        })
        siteNav.fadeIn();
    }

    // Функція приховування навігації сайту та анімація натискання на кнопку "бургер"
    function hideSiteMenu() {
        buttomMenu.css({
            'transform': 'rotate(0)'
        })
        siteNav.fadeOut();
    }

    // Бібліотека slick. Слайдер на головній сторінці
    $('.slider__main-js').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        arrows: false,
        fade: true,
        responsive: [{
            breakpoint: 576,
            settings: {
                dots: false
            }
        }]
    });
});