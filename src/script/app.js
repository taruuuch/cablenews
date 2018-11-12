(function() {
    $('.news-slider').owlCarousel({
        loop: true,
        items: 1,
        nav: true,
        autoplay: true,
        autoplayHoverPause: true,
        autoplaySpeed: 7000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 200
    });
})();