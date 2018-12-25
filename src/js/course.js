(function() {
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
