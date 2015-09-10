$( document ).ready(function() {
	
	var url = window.location.protocol + '//' + window.location.hostname + '/Maquetado/slides/background-medallia.json',
		slides;
	
	$.getJSON(url, function(data) {
		
		slides = data;

		// vegas slider
		$(".video").vegas({
		    timer: false,
		    delay: 5000,
		    align: 'center',
		    valign: 'center',
		    transition: 'fade',
		    'transition­Duration': 1000,
		    slides: data
		});

	});	

});