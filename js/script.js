const burger = document.querySelector('.header__burger'),
      asideMenu = document.querySelector('.aside-menu'),
      asideMenuClose = document.querySelector('.aside-menu__close'),
      overlay = document.querySelector('.overlay');

$('.promo-slider').slick({
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 1,
    slideToScroll: 1,
    nextArrow: '<button type="button" class="slick-next"><img src="../img/header/next.svg" alt=""></button>',
    prevArrow: '<button type="button" class="slick-prev"><img src="../img/header/previos.svg" alt=""></button>',
    responsive: [
        {
          breakpoint: 1100,
          settings: {
            arrows: false,
          }
        }
      ]

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
    prevArrow: '<button type="button" class="slick-prev"><img src="../img/header/previos.svg" alt=""></button>',
    responsive: [
        {
            breakpoint: 1300,
            settings: {
              centerPadding: '350px',
              slidesToShow: 1,
              variableWidth: false,
            }
        },

        {
            breakpoint: 1200,
            settings: {
                centerMode: false,
                slidesToShow: 1,
                slideToScroll: 1,
                variableWidth: false,
            }
        },

      ]

});

$('.questions__item-title').on('click', function(e){
    $(this).toggleClass('questions__item-title--active');
    $(this).next().slideToggle('200'); // очень важная вешь  скрывает и показывает при клике на какой то элеент следющий элемент
    if($(this).next().css('display') == 'block') {
        $(this).next().css('display', 'flex');
        $(this).next().css('display', 'flex');

    };
});

$('.catalog__tab ').on('click', function(e){
    e.preventDefault();
    $($(this).siblings()).removeClass('catalog__tab--active');
    $(this).addClass('catalog__tab--active');
    $(".catalog__content").removeClass('catalog__content--active');
    $($(this).attr('href')).addClass('catalog__content--active');
});

burger.addEventListener('click',()=>{
    asideMenu.classList.toggle('aside-menu--active');
    overlay.style.display = "block";
});   

asideMenuClose.addEventListener('click',()=>{
    asideMenu.classList.toggle('aside-menu--active');
    overlay.style.display = "none";
});

window.addEventListener('scroll', ()=>{
    if(window.pageYOffset >= 10){
        $('.header__inner').css("background-color", "rgba(0,0,0,0.6)")
    }
    else {
        $('.header__inner').css("background-color", "unset")
    }
})