// Slick slider
$(document).ready(function(){
	$('.section-collections__list').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 1000,
		arrows: true,
		prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa-solid fa-arrow-left' aria-hidden='true'></i></button>",
		nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa-solid fa-arrow-right' aria-hidden='true'></i></button>",
		responsive: [
			{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true
			}
			},
			{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
			},
			{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
			}
		]
	});
});