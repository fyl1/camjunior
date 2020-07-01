$(document).ready(function(e) {

	$(".ajax-contact-form").submit(function () {
		var str = $(this).serialize();

		$.ajax({
			type: "POST",
			url: "https://campjunior.ru/mail_dudar.php",
			// url: "http://andreydevweb.biz.ua/camjunior/mail_dudar.php",
			
			data: str,
			success: function () {
				result = '<p>Ваш заказ принят</p>';
				$('.note').html(result);
			}
		});
		return false;
	});
	$(".ajax-contact-form_two").submit(function () {
		var strr = $(this).serialize();

		$.ajax({
			type: "POST",
			url: "https://campjunior.ru/mail_dudar_two.php",
			// url: "http://andreydevweb.biz.ua/camjunior/mail_dudar_two.php",
			data: strr,
			success: function () {
				result = '<p>Ваш заказ принят</p>';
				$('.note_two').html(result);
			}
		});
		return false;
	});

	$('.fancybox').fancybox({
		
	});
	$(".scrollto").click(function(){
		var selected = $(this).attr('href');	
		$.scrollTo(selected, 500);		
		return false;
	});
	var training_sld = $('.training_sld').bxSlider({
		auto:false,
		pager:false,
		controls:true,
		touchEnabled:false,
		adaptiveHeight:true
	});

	var galleryThumbs = new Swiper('.lager_slider_bottom_wrapper', {
		spaceBetween: 60,
		slidesPerView: 1,
		speed: 400,
		// freeMode: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		loop: true
		// navigation: {
		//   nextEl: '.swiper-button-next',
		//   prevEl: '.swiper-button-prev',
		// },

	  });
	  var mySwiper = new Swiper('.lager_img_wrapper', {
		speed: 400,
		spaceBetween: 100,
		loop:true,
		loopedSlides: 5,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		  },
		thumbs: {
			swiper: galleryThumbs,
		  }
	});
	if($(window).width()<767){
		$('.timer').insertAfter('.offer_details');
	  }else{
		$('.timer').insertAfter('.offers');
	  }
	window.onresize = function(){
		setTimeout(function() {
			var galleryThumbs = new Swiper('.lager_slider_bottom_wrapper', {
				speed: 400,
				spaceBetween: 60,
				slidesPerView: 1,
				// freeMode: true,
				watchSlidesVisibility: true,
				watchSlidesProgress: true,
				loop: true
				// navigation: {
				//   nextEl: '.swiper-button-next',
				//   prevEl: '.swiper-button-prev',
				// },
		
			  });
			  var mySwiper = new Swiper('.lager_img_wrapper', {
				speed: 400,
				spaceBetween: 100,
				loop:true,
				loopedSlides: 5,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				  },
				thumbs: {
					swiper: galleryThumbs,
				  }
			});
			if($(window).width()<767){
				$('.timer').insertAfter('.offer_details');
			  }else{
				$('.timer').insertAfter('.offers');
			  }
		}, 1000);
	  }



	$('.burger, .arrow_top').click(function(){
		$('.header_menu').slideToggle();
		return false;
	});
	$('input[type="tel"]').inputmask("+7(999)-99-99-999");

	let timeend= new Date();

	timeend= new Date(2020, 06, 20);

	time();
	function time() {
		today = new Date();
		today = Math.floor((timeend-today)/1000);
		tsec=today%60; today=Math.floor(today/60); if(tsec<10)tsec='0'+tsec;
		tmin=today%60; today=Math.floor(today/60); if(tmin<10)tmin='0'+tmin;
		thour=today%24; today=Math.floor(today/24);
		timestr=today;
		document.getElementById('t').innerHTML=timestr;
		window.setTimeout("time()",1000);
	}


});


