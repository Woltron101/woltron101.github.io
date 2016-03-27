
$(document).ready(function() {

	var carousel = $('.carousel'),
		slider = $('.slides'),
		width = $('#slider-container').width();
	  
	//dimensions
	slider.children().width(width);
	slider.width(width*slider.children().length);
	
	//positioning
	slider.css('left',-width);
	slider.children(':last').prependTo('.slides');
	
	$('#next').click(function() {
		if(!carousel.is(':animated') && !slider.is(':animated')){

			carousel.css('left', '-99px');
			carousel.children(':first').before(carousel.children().slice(4,5).clone(true));
			carousel.animate({left: "0"}, 1000);		
		
			slider.animate({
				'margin-left':width
				},500, function() {
					slider.children(':last').prependTo('.slides');
					slider.css('margin-left', 0);
			});	                           
		}
	});

	$('#prev').click(function() {
		if(!carousel.is(':animated') && !slider.is(':animated')){

			carousel.children(':last').after(carousel.children().slice(0,1).clone(true));
			carousel.animate({left: "-99px"}, 1000,(function(){
				carousel.children(':first').remove();
				carousel.css('left', '0');
			}));

			slider.animate({
				'margin-left':-width
				},500, function() {
					slider.children(':first').appendTo('.slides');
					slider.css('margin-left', 0);
				}
			);	 
			
		}	
	});
	
	var carousel2 = $('.carous');	
	
	$('.games_right_arr').click(function() {
		if(!carousel2.is(':animated')){
			carousel2.css('left', '-75px');
			carousel2.children(':first').before(carousel2.children().slice(7,8).clone(true));
			carousel2.animate({left: "0"}, 500,(function(){
				carousel2.children(':last').remove()
			}));		                          
		}
	});

	$('.games_left_arr').click(function() {
		if(!carousel2.is(':animated')){
			carousel2.children(':last').after(carousel2.children().slice(0,1).clone(true));			
			carousel2.animate({left: "-75px"}, 500,(function(){
				carousel2.children(':first').remove()
				carousel2.css('left', '0px');
			}));
			
		}	
	});
});