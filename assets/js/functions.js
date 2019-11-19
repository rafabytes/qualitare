$( document ).ready(function() {

	// SMOOTH SCROLL
	$(".sliding-link").click(function(e) {
		e.preventDefault();
		var aid = $(this).attr("href");
		$('html,body').animate({scrollTop: $(aid).offset().top},'slow');
	});

	// CHROME FOR MAC
	$(function () {
		if (navigator.userAgent.match(/Macintosh/) && navigator.userAgent.match(/Chrome/)) {
			$("body").addClass("chrome-for-mac");
		}
	});

	// IPAD
	if( /iPad/i.test(navigator.userAgent) ) {
		$("body").addClass("ipad");
	};

	// SAFARI
	if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
		$("body").addClass("safari");
	};

	// MOBILE
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		$("body").addClass("mobile");
	};

	// WOW
	wow = new WOW({
		live: true,
		offset: 50,
	}).init();

	// REPLACE ALL SVG IMAGES WITH INLINE SVG
	jQuery('img.svg').each(function(){
		var $img = jQuery(this);
		var imgID = $img.attr('id');
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');
		jQuery.get(imgURL, function(data) {
			var $svg = jQuery(data).find('svg');
			if(typeof imgID !== 'undefined') {
				$svg = $svg.attr('id', imgID);
			}
			if(typeof imgClass !== 'undefined') {
				$svg = $svg.attr('class', imgClass+' replaced-svg');
			}
			$svg = $svg.removeAttr('xmlns:a');
			$img.replaceWith($svg);
		}, 'xml');
	});

	var video = $("#player video");

	$('.btn-play').click(function(){

		if(!$(video).hasClass('paused')) {
			$(video)[0].pause();
			$(video).addClass('paused');
			$('.btn-play').removeClass('hidden');
		} else {
			$(video)[0].play();
			$(video).removeClass('paused');
			$('.btn-play').addClass('hidden');
		}

		if($('.btn-play').hasClass('replay')) {
			$('.btn-play').removeClass('replay');
		}

	});

	video.on('ended',function(){
		$('.btn-play').removeClass('hidden');
		$('.btn-play').addClass('replay');
		$('html, body').animate({
			scrollTop: $(".ontem-img").offset().top
		}, 1000);
	});

	var videoSrc = ($("#player video source"));
	var videoDesktop = ($(videoSrc).attr('src'));
	var videoMobile = $(videoSrc).attr('src').replace('desktop', 'mobile');

	var screen = $(window).width();
	var window_height = $(window).height();
	var hoje_pos = $("#hoje").offset().top;
	var tl_height = $("section#timeline").height();

	$(window).bind('load', function(){

		tl_height = $("section#timeline").height();

	});


	if (screen < 769) {
		$(video).attr('poster', 'assets/img/poster-mobile.jpg');
		$(videoSrc).attr('src', videoMobile);
		$(video)[0].load();
		$('#hoje .section-header h1').attr('data-wow-offset', '80');
		$('#hoje .section-header p').attr('data-wow-offset', '80');
		$('#hoje .service h2').attr('data-wow-delay', '0');
		$('#hoje .service img').attr('data-wow-delay', '0');
		$('#hoje .service .desc').attr('data-wow-delay', '0');

	}

	$(window).scroll(function(){

		if ( $(document).scrollTop() < 1 || $(document).scrollTop() > tl_height-window_height*1.5) {

			$('.timeline-col-l').addClass('hidden');
			$('.timeline-col-r').addClass('hidden');
			$('.btn-play').removeClass('back');

		} else {
			
			$('.btn-play').addClass('back');
			$('.timeline-col-l').removeClass('hidden');
			$('.timeline-col-r').removeClass('hidden');
			
		}

		// if ($(document).scrollTop() > 0) {
		// 	$('.timeline-col-l').removeClass('hidden');
		// 	$('.timeline-col-r').removeClass('hidden');
		// } else {
		// 	$('.btn-play').removeClass('back');
		// 	$('.timeline-col-l').addClass('hidden');
		// 	$('.timeline-col-r').addClass('hidden');
		// }


		// if (screen < 768) {

		// 	if ($(document).scrollTop() > tl_height-window_height*1.5 ) {

		// 		$('.timeline-col-l').addClass('hidden');
		// 		$('.timeline-col-r').addClass('hidden');

		// 	} else {

		// 		if ($(document).scrollTop() == 0) {

		// 			$('.timeline-col-l').addClass('hidden');
		// 			$('.timeline-col-r').addClass('hidden');


		// 		} else {

		// 			$('.timeline-col-l').removeClass('hidden');
		// 			$('.timeline-col-r').removeClass('hidden');

		// 		}

		// 	}

		// } else {

		// 	if ($(document).scrollTop() < tl_height - window_height*1.5) {

		// 		if ($(document).scrollTop() > 0) {

		// 			$('.timeline-col-l').removeClass('hidden');
		// 			$('.timeline-col-r').removeClass('hidden');

		// 		} else {

		// 			$('.timeline-col-l').addClass('hidden');
		// 			$('.timeline-col-r').addClass('hidden');

		// 		}

		// 	} else {

		// 		$('.timeline-col-l').addClass('hidden');
		// 		$('.timeline-col-r').addClass('hidden');

		// 	}
		// }

	});

	/*------------------------------------------------------
	--------------------------------------------------------
		## FSMENU
	--------------------------------------------------------
	------------------------------------------------------*/

	// HAMBURGER MENU
	$("section#top-menu #bt-menu").click(function(){
		$("section#fsmenu").addClass('opacity');
		$("body").addClass('no-scroll');
	});

	// CLOSE BT
	$("section#fsmenu .close-bt").click(function(){
		$("section#fsmenu").removeClass('opacity');
		$("body").removeClass('no-scroll');
	});
	
});