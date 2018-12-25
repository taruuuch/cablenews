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
        autoplaySpeed     : 6000,
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

	$('.navbar').slicknav({});

    $('.navbar__list-dropdown').hover(function () {
			$(this).find('.navbar__list-dropdown__list').slideDown('medium');
        }, function () {
			$(this).find('.navbar__list-dropdown__list').slideUp('medium');
        }
	);

	// $('.news').hover(function () {
	// 		$(this).animate({});
	// 	}, function () {
	// 		$(this).animate({});
	// 	}
	// );
})();
