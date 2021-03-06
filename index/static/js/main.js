/*================================================
[  Table of contents  ]
================================================

	01. jQuery Mobile MeanMenu
	02. Slider Active
	03. Counter Up
	04. Gallery Iostop Active
	05. Our Team Slick Slider
	06. Mailchimp Active
	07. TOP Menu Stick
	08. Magnific Popup For Video
	09. scrollUp
	10. Search
	11. Testimonial
	12. Youtube Background Activation
	13. Tailer Owl Active
	
================================================*/

(function ($) {
 "use strict";
	
	/*------ 01. jQuery Mobile MeanMenu ------*/
	jQuery('#mobile-nav').meanmenu();
	
	/*------ 02. Slider Active ------*/
	$('.slider-active').owlCarousel({
		items:1,
		margin:0,
		autoHeight:true
	});	
	
	/*------ 03. Counter Up ------*/
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});
	
	/*------ 04. Gallery Iostop Active ------*/
	// images have loaded
	$('.gallery-box').imagesLoaded( function() {
	  // Isotop Active
	  $('.gallery-menu').on( 'click', 'li', function() {
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({ filter: filterValue });
	  });

	  // Isotop Full Grid
	  var $grid = $('.grid').isotope({
		itemSelector: '.grid-item',
		percentPosition: true,
		masonry: {
		columnWidth: 1
		}
	  });
	  // Isotop Menu Active
	  $('.gallery-menu li').on('click', function(event) {
			$(this).siblings('.active').removeClass('active');
			$(this).addClass('active');
			event.preventDefault();
		});
	});
	
	/*------ 05. Our Team Slick Slider ------*/
	 $('.slider-for').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true,
	  asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
	  slidesToShow: 5,
	  slidesToScroll: 1,
	  asNavFor: '.slider-for',
	  dots: false,
	  centerMode: true,
	  arrows: true,
	  centerPadding: '0px',
	  focusOnSelect: true,
	  prevArrow: '<div class="slick-prev"><i class="icofont icofont-long-arrow-left" aria-hidden="true"></i></div>',
      nextArrow: '<div class="slick-next"><i class="icofont icofont-long-arrow-right" aria-hidden="true"></i></div>'
	});
	
	/*------ 06. Mailchimp Active ------*/
	$('#mc-form').ajaxChimp({
		language: 'en',
		callback: mailChimpResponse,
		// ADD YOUR MAILCHIMP URL BELOW HERE!
		url: 'http://themeshaven.us8.list-manage.com/subscribe/post?u=759ce8a8f4f1037e021ba2922&amp;id=a2452237f8'
	});
	function mailChimpResponse(resp) {
		if (resp.result === 'success') {
			$('.mailchimp-success').html('' + resp.msg).fadeIn(900);
			$('.mailchimp-error').fadeOut(400);
		} 
		else if(resp.result === 'error') {
			$('.mailchimp-error').html('' + resp.msg).fadeIn(900);
		}  
	};
	
	/*------ 07. TOP Menu Stick ------*/
	var wstick = $(window);
	wstick.on('scroll',function() {    
	   var scroll = wstick.scrollTop();
	   if (scroll < 245) {
		$("#sticky-header").removeClass("sticky");
	   }else{
		$("#sticky-header").addClass("sticky");
	   }
	});
	
	/*------ 08. Magnific Popup For Video ------*/
	$('.popup-youtube').magnificPopup({
		type: 'iframe'
	});
	
	$('.popup-gallery').magnificPopup({
		type: 'image'
	});
	
	/*------ 09. scrollUp ------*/
	$.scrollUp({
		scrollText: '<i class="fa fa-angle-up"></i>',
		easingType: 'linear',
		scrollSpeed: 900,
		animation: 'fade'
	});
	
		
	/*------ 10. Search ------*/
	$('.search-open').on('click', function(){
		$('.search-inside').fadeIn();
	});
	$('.search-close').on('click', function(){
		$('.search-inside').fadeOut();
	});	

	
	/*------ 11. Testimonial ------*/
	$('.testimonial-style.testimonial-slider-active').slick({
		autoplay: true,
		autoplaySpeed: 5000,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'ease-in-out',
		draggable: false,
		arrows: false,
		dots: true,
		adaptiveHeight: true,
	});
	

	/*------ 12. Youtube Background Activation ------*/
	if ($('.youtube-bg').length) {
		$('.youtube-bg').YTPlayer({
			containment: '.youtube-bg',
			autoPlay: true,
			loop: true,
			realfullscreen: true,
			showControls: false,
			mobileFallbackImage: '../images/bg/11.jpg',
		});
	}
	
	/*------ 13. Tailer Owl Active ------*/
	$('.tailer-active').owlCarousel({
	  loop: true,
	  margin: 30,
	  autoplay: false,
	  nav: true,
	  dots:false,
	  navText:["<i class='icofont icofont-dotted-left'></i>","<i class='icofont icofont-dotted-right'></i>"],
	  responsive: {
		0: {
		  items: 1
		},
		480:{
			items:1
		},
		600: {
		  items: 1
		},
		768:{
			items:2
		},
		1000: {
		  items: 4
		}
	  }
	})
 
})(jQuery);  