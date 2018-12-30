//------------Slider-------------
$('.slider_block').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 6000,
	speed: 1500,
	arrows: false,
	 dots: true
});
if ($(window).width() < 760) {
  $('.slider_block').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 6000,
		speed: 1500,
		arrows: false,
		 dots: true
	});
}



//-----------Masked-----------
jQuery(function(){
   $('[name="phone"]').mask("+99 (999) 999-9999");
});




//-----------Scroll---------
function slowScroll(id){
	var offset = 0;
	$('html, body').animate ({
		scrollTop: $(id).offset().top - offset
	}, 1000);
	return false;
}






//----------------Send form Ajax----------------
$("#myform").submit(function(e) {
	e.preventDefault();
	   $.ajax({
	    	type: "POST",
	      url: "mail.php",
	      data: $("#myform").serialize(),
	      success: function(data) {
	   			$("#name").val("");
					$("#email").val("");
					$('[name="phone"]').val("");
					$("#message").val("");
					$('.success_result').html(data);
					$('.success_result').style("display = 'block'");
				}
	});
});