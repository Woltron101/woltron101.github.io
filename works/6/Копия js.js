
$(document).ready(function() {

	var width = $('#slider-container').width();
	  
	//dimensions
	$('#slider-container .slides>li').width(width);
	$('#slider-container .slides').width(width*$('#slider-container .slides>li').length);
	
	//positioning
	$('#slider-container .slides').css('left',-width);
	$('#slider-container .slides>li:last-child').prependTo('#slider-container .slides');
	
	$('#next').click(function() {
		if(!$('.carousel').is(':animated') && !$('#slider-container .slides').is(':animated')){

			$('.carousel').css('left', '-99px');
			$('.carousel').children(':first').before($('.carousel').children().slice(4,5).clone(true));
			$('.carousel').animate({left: "0"}, 1000,(function(){
				$('.carousel>li:last-child').remove()
			}));		
		
			$('#slider-container .slides').animate({
				'margin-left':width
				},500, function() {
					$('#slider-container .slides>li:last-child').prependTo('#slider-container .slides');
					$('#slider-container .slides').css('margin-left', 0);
			});	                           
		}
	});

	$('#prev').click(function() {
		if(!$('.carousel').is(':animated') && !$('#slider-container .slides').is(':animated')){

			$('.carousel').children(':last').after($('.carousel').children().slice(0,1).clone(true));
			$('.carousel').animate({left: "-99px"}, 1000,(function(){
				$('.carousel>li:first-child').remove();
				$('.carousel').css('left', '0');
			}));

			$('#slider-container .slides').animate({
				'margin-left':-width
				},500, function() {
					$('#slider-container .slides>li:first-child').appendTo('#slider-container .slides');
					$('#slider-container .slides').css('margin-left', 0);
				}
			);	 
			
		}	
	});
});