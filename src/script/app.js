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

    $('.open-search-form').click(function() {
        $('.search-form').slideToggle().css('display', 'flex');
        $(this).hide();
	});

	var res = new Date().toISOString().slice(0,10).replace(/-/g,"");

	$.getJSON("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=EUR&date="+res+"&json")
	.done(function(data) {
		$('.dollar .course-value').text(data[0].rate.toFixed(3));
	});
	$.getJSON("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=USD&date="+res+"&json")
	.done(function(data) {
		$('.euro .course-value').text(data[0].rate.toFixed(3));
	});
	$.getJSON("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=RUB&date="+res+"&json")
	.done(function(data) {
		$('.ruble .course-value').text(data[0].rate.toFixed(3));
	});

})();
