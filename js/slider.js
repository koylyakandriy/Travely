;(function($){
	"use strict";

	jQuery(document).ready(function($) {
			$('.slide').slick({
			  dots: true,
			  infinite: true,
			  speed: 300,
			  slidesToShow: 3,
			  centerMode: false,
			  variableWidth: false
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
