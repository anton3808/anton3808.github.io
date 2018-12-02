$('.slider_block').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 6000,
	speed: 1500,
	arrows: false,
	 dots: true
});

jQuery(function($){
   $("#phone").mask("+99 (999) 999-9999");
});



function slowScroll(id){
	var offset = 0;
	$('html, body').animate ({
		scrollTop: $(id).offset().top - offset
	}, 1000);
	return false;
}
