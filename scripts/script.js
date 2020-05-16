'use strict';

$(document).ready(function(){
	$('a[href^="#"]').click(function(e){	
		e.preventDefault();
	});

	$('a[href^="#"]').click(function(){
		let href = $(this).attr('href');
		let offset = $(href).offset().top - 50;

		$('body,html').animate({
			scrollTop: offset
		}, 100);
	});

	$('.nav-btn').click(function(e) {
		e.stopPropagation();

		$('.nav-btn').toggleClass('close');
		$('.main-nav').toggleClass('active');
	});

	$('.close-btn').click(function() {
		$('.main-nav').removeClass('active');
	});	

	$(document).click(function(e){
		const menu = $('.main-nav');

		if (
			!menu.is(e.target) && 
			menu.has(e.target).length === 0 && 
			menu.hasClass('active')
		) {
			$('.main-nav').removeClass('active');
		}
	});

	$('.owl-carousel').owlCarousel({
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

	$('.feedback-btn').click(function() {
		$('.modal-box__feedback').addClass('active');
	});

	$('.modal-box').click(function(e){
		if(e.target == this) {
			$(this).removeClass('active');
			$('.form__item-input').val('').removeClass('error');
		}
	});

	$('.modal-close-btn').click(function() {
		$(this).parents('.modal-box').removeClass('active');
		$('.form__item-input').val('').removeClass('error');
	});

	$('input[type="tel"]').inputmask({ "mask": "+7-999-999-99-99" });

	$('form').submit(function() {
		let $form = $(this);
	
		if ($form.find('input[name=client-name]').val() === '') {
			$form.find('input[name=client-name]')
				.addClass('error');
			return false;
		}

		if ($form.find('input[name=client-phone-number]').val() === '') {
			$form.find('input[name=client-phone-number]')
				.addClass('error');
			return false;
		}

		if ($form.find('input[name=client-email]').val() === '') {
			$form.find('input[name=client-email]')
				.addClass('error');
			return false;
		}
	
		$form.removeClass('error');

		$.post(
			$form.attr('action'), 
			$form.serialize()
		);

		return false;
	});

	$(document).ajaxSuccess(function() {
		$('.form__item-input').val('');
		$('.modal-box').removeClass('active');
		$('.success-window').addClass('active').fadeOut(3000);
	});

	$(window).resize(function() {
		if ($(window).height() <= 460) {
			$('.modal-box').css({
				"overflow": "scroll"
			});

			$('.modal-window__wrapper').css({
				"top": "1%",
				"margin-top": "0"
			});
		}
		else 
			if ($(window).height() > 460) {
				$('.modal-box').css({
					"overflow": "auto"
				});

				$('.modal-window__wrapper').css({
					"top": "50%",
					"margin-top": "-250px"
				});
			}
	});

	function setOnclick(a) {
		a.setAttribute(
			"onclick",
			"popupWin = window.open(this.href,'contacts','toolbar=0,status=0,width=626,height=436'); popupWin.focus(); return false"
		);
	}

	function externalLinks() {
		var links = document.getElementsByTagName("a");
		let i;

		for (i=0; i<links.length; i++) {
			if (
				links[i].getAttribute("href") && 
				links[i].getAttribute("rel") === "nofollow noopener"
			) {
				setOnclick(links[i])
			}
		}
	}

	window.onload = externalLinks;
});