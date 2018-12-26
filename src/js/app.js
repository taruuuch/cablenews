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

	$('#menu').slicknav({
		label: 'CableNews.com',
		prependTo:'.navbar__mobile'
	});

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

    // $('.navbar__search-control__button').click(function() {
	// 	var search = $('.navbar__search-control__input').val();
	// 	if (search) {
	// 		window.location.href = '/site/search?search=' + search;
	// 	}
	// });

	$.each($('.video__list-item'), function (indexInArray, valueOfElement) {
		$(this).find('.video__list-item__image').attr('style', 'background-image: url("//img.youtube.com/vi/' + $(this).data('youtube-id') + '/maxresdefault.jpg")');
	});
})();
