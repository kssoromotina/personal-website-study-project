$(document).ready(function(){
	$('a[href="#"]').click(function(e){	
		e.preventDefault();
	});

	$('a[href^="#"]').click(function(){
		let href = $(this).attr('href');
		
		let offset = $(href).offset().top - 50;

		$('body,html').animate({
			scrollTop: offset
		}, 100);
	});


	$('.nav-btn').click(function() {
		$('.nav-btn').toggleClass('close');
		$('.main-nav').toggleClass('active');
	});

	$('.close-btn').click(function() {
		$('.main-nav').removeClass('active');
	});	
	
	$(".owl-carousel").owlCarousel({
		loop:true,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:false,
				dots:true,
				dotsEach:true,
				margin: 20,
			},
			1001:{
				items:2,
				nav:false,
				dots:true,
				dotsEach:true,
				margin: 37,
			},
			1201:{
				items:3,
				nav:true,
				dots:false,
				margin:30,
			},
		}
	});

	$('.order-call-btn').click(function() {
		$('.modal-box__call-order').addClass('active');
	});

	$('.call-btn-mob').click(function() {
		$('.modal-box__call-order').addClass('active');
	});

	$('.modal-box__call-order').click(function(event){
		if(event.target == this) {
			$(this).removeClass('active');
		}
	});

	$('.feedback-btn').click(function() {
		$('.modal-box__feedback').addClass('active');
	});

	$('.modal-box__feedback').click(function(event){
		if(event.target == this) {
			$(this).removeClass('active');
		}
	});

	$('.modal-close-btn').click(function() {
		$(this).parents('.modal-box').removeClass('active');
	});
});