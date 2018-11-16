(function() {
    $('.slider__news').owlCarousel({
        loop              : true,
        items             : 1,
        dots              : false,
        navText           : [
            "<img src='img/icon/arrow-left.svg' />",
            "<img src='img/icon/arrow-right.svg' />",
        ],
        autoplay          : true,
        autoplayHoverPause: true,
        autoplaySpeed     : 7000,
        animateOut        : 'fadeOut',
        animateIn         : 'fadeIn',
        smartSpeed        : 200,
        responsive        : {
            0   : {
                nav       : false
            }, 
            840 : {
                nav       : true
            }
        }
    });

    $('.open-search-form').click(function() {
        $('.search-form').slideToggle().css('display', 'flex');
        $(this).hide();
    });
})();