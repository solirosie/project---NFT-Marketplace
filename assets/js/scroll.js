// Scroll header 
jQuery(window).on('scroll', function() {
	if(jQuery(window).scrollTop() > 100 ) {
		jQuery('#header').css('background-color', '#403f83');
	} else {
	jQuery('#header').css('background-color', 'transparent');
	}
});