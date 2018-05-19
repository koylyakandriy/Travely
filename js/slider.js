;(function($){
	"use strict";

	jQuery(document).ready(function($) {
			$('.slider').slick({
			  dots: false,
			  infinite: true,
			  speed: 300,
			  slidesToShow: 1,
			  centerMode: false,
			  variableWidth: false,
			  autoplay: true
			});
		});
})(jQuery);



/*
just need great new div>img* and add pictures
	<div class="slide">
		<img src="img/IMG_0018.JPG" alt="">
		<img src="img/IMG_0044.JPG" alt="">
		<img src="img/IMG_0334.JPG" alt="">
		<img src="img/IMG_5875.jpg" alt="">
		<img src="img/IMG_6566.jpg" alt="">
		<img src="img/IMG_6615.jpg" alt="">
		<img src="img/IMG_6785.jpg" alt="">
		<img src="img/IMG_6787.jpg" alt="">
	</div>
*/
