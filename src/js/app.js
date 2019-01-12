$(window).on('load', function() {
	$('body').animate({
		opacity: '1'
	}, 'slow')
	.css('overflow', 'auto');
});

(function() {

	$('.slider__news').slick({
		infinite     : true,
		arrows       : true,
		speed        : 500,
		fade         : true,
		cssEase      : 'linear',
		autoplay     : true,
		autoplaySpeed: 6000,
		pauseOnHover : true,
		prevArrow    : '<div class="slider__news-prev"><img src="img/icon/arrow-left.svg"/></div>',
		nextArrow    : '<div class="slider__news-next"><img src="img/icon/arrow-right.svg"/></div>',
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

	var res = new Date().toISOString().slice(0,10).replace(/-/g,"");

	$.getJSON("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=USD&date="+res+"&json")
	.done(function(data) {
		$('.dollar .course-value').text(data[0].rate.toFixed(3));
	});
	$.getJSON("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=EUR&date="+res+"&json")
	.done(function(data) {
		$('.euro .course-value').text(data[0].rate.toFixed(3));
	});
	$.getJSON("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=RUB&date="+res+"&json")
	.done(function(data) {
		$('.ruble .course-value').text(data[0].rate.toFixed(3));
	});
})();
