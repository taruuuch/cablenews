$(window).on('load', function() {
	$('nav').animate({
		opacity: '1'
	}, 'slow');
	$('header').animate({
		opacity: '1'
	}, 'slow');
	$('main').animate({
		opacity: '1'
	}, 'slow');
	$('footer').animate({
		opacity: '1'
	}, 'slow');
	$('body').css('overflow', 'auto');
});

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

	$('.tab__button-item').click(function() {
		var tabId = $(this).data('tab');
		$('.tab__button-item').removeClass('active');
		$(this).addClass('active');
		$('.tab__content-item').removeClass('active').fadeOut();
		$('.tab__content-item').each(function() {
			if ($(this).data('tab') == tabId) {
				$(this).addClass('active').fadeIn();
			}
		});
	});

	$.each($('.video__list-item'), function() {
		$(this).find('.video__list-item__image').attr('style', 'background-image: url("//img.youtube.com/vi/' + $(this).data('youtube-id') + '/maxresdefault.jpg")');
	});
})();
