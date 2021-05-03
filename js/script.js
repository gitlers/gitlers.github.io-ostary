$('.promo-slider').slick({
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 1,
    slideToScroll: 1,
    nextArrow: '<button type="button" class="slick-next"><img src="../img/header/next.svg" alt=""></button>',
    prevArrow: '<button type="button" class="slick-prev"><img src="../img/header/previos.svg" alt=""></button>'

});

$('.reviews__slider').slick({
    dots: true,
    arrows: false,
    adaptiveHeight: true,
    slidesToShow: 1,
    slideToScroll: 1,
    centerMode: true,
    variableWidth: true,
    nextArrow: '<button type="button" class="slick-next"><img src="../img/header/next.svg" alt=""></button>',
    prevArrow: '<button type="button" class="slick-prev"><img src="../img/header/previos.svg" alt=""></button>'

});

$('.questions__item-title').on('click', function(e){
    $(this).toggleClass('questions__item-title--active');
    $(this).next().slideToggle('200'); // очень важная вешь  скрывает и показывает при клике на какой то элеент следющий элемент

});

$('.catalog__tab ').on('click', function(e){
    e.preventDefault();
    $($(this).siblings()).removeClass('catalog__tab--active');
    $(this).addClass('catalog__tab--active');
    $(".catalog__content").removeClass('catalog__content--active');
    $($(this).attr('href')).addClass('catalog__content--active');
});

window.addEventListener('scroll', ()=>{
    if(window.pageYOffset >= 10){
        $('.header__inner').css("background-color", "rgba(0,0,0,0.6)")
    }
    else {
        $('.header__inner').css("background-color", "unset")
    }
})