(function ($) {
	"use strict";

	/*-- Menu Sticky --*/
	var win = $(window);
	var sticky = $('.header-area');
	win.on('scroll', function () {
		var scroll = win.scrollTop();
		if (scroll < 245) {
			sticky.removeClass('stick');
		} else {
			sticky.addClass('stick');
		}
	});

	/*-- One Page Menu --*/
	var TopOffsetId = $('.header-bottom').height() - 41;
	$('#main-menu nav').onePageNav({
		currentClass: 'active',
		scrollThreshold: 0.2,
		scrollSpeed: 1000,
		scrollOffset: TopOffsetId,
	});

	/*-- Bootstrap Menu Fix For Mobile --*/
	$(document).on('click', '.navbar-collapse.in', function (e) {
		if ($(e.target).is('a')) {
			$(this).collapse('hide');
		}
	});

	/*-- Hero Slider --*/
	$('.hero-slider').slick({
		arrows: false,
		autoplay: false,
		dots: true,
		fade: true,
		infinite: true,
		slidesToShow: 1,
		responsive: [{
			breakpoint: 950,
			settings: {
				dots: false,
				autoplay: true,
				autoplaySpeed: 5000,
			}
		}, ]
	});

	/*-- Achivment Slider --*/
	$('.achivment-slider').slick({
		arrows: false,
		dots: true,
		infinite: true,
		slidesToShow: 1,
	});

	/*-- Magnific Popup --*/

	/*-- Video --*/
	var videoPopup = $('.video-popup');
	videoPopup.magnificPopup({
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		zoom: {
			enabled: true,
		}
	});

	/*-- Gallery --*/
	var galleryPopup = $('.gallery-popup');
	galleryPopup.magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});

	/*-- Smooth Scroll --*/
	$('[data-scroll]').on('click', function (e) {
		e.preventDefault();
		var link = this;
		$.smoothScroll({
			speed: 1000,
			scrollTarget: link.hash,
			offset: -70,
		});
	});

	/*-- Scroll Up --*/
	$.scrollUp({
		easingType: 'linear',
		scrollSpeed: 900,
		animation: 'fade',
		scrollText: '<i class="zmdi zmdi-chevron-up"></i>',
	});

	// js preloader ..!

	$(window).on('load', function () {
		/*------------------------
		    preloader
		-------------------------*/
		var preLoder = $("#preloader");
		preLoder.fadeOut(500);
		/*------------------------------
		    back to Top
		--------------------------------*/
		var backtoTop = $('.back-to-top')
		backtoTop.fadeOut(100);
	});

	// js preloader end ..!

})(jQuery);

jssor_1_slider_init = function () {

	var jssor_1_options = {
		$AutoPlay: 1,
		$SlideDuration: 800,
		$SlideEasing: $Jease$.$OutQuint,
		$ArrowNavigatorOptions: {
			$Class: $JssorArrowNavigator$
		},
		$BulletNavigatorOptions: {
			$Class: $JssorBulletNavigator$
		}
	};

	var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

	/*#region responsive code begin*/

	var MAX_WIDTH = 3000;

	function ScaleSlider() {
		var containerElement = jssor_1_slider.$Elmt.parentNode;
		var containerWidth = containerElement.clientWidth;

		if (containerWidth) {

			var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

			jssor_1_slider.$ScaleWidth(expectedWidth);
		}
		else {
			window.setTimeout(ScaleSlider, 30);
		}
	}

	ScaleSlider();

	$Jssor$.$AddEvent(window, "load", ScaleSlider);
	$Jssor$.$AddEvent(window, "resize", ScaleSlider);
	$Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
	/*#endregion responsive code end*/
};

jssor_1_slider_init();


