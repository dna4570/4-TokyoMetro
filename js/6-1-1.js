$('.slider').slick({
	fade:true,
	autoplaySpeed: 3000,
	speed: 1000,
	autoplay: true,
	infinite: true,
	slidesToShow:1,
	slidesToScroll:3,
	arrow:true,
	prevArrow:'<div class="slick-prev"></div>',
	nextArrow: '<div class="slick-next"></div>',
	dots: true,
	pauseOnFocus:false,
	pauseHover:false,
	pauseOnDotsHover:false,
});

//スマホ用：スライダーをタッチしても止めずにスライドをさせたい場合
$('.slider').on('touchmove', function(event, slick, currentSlide, nextSlide){
    $('.slider').slick('slickPlay');
});
