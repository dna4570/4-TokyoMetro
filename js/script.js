<script>
	var swiper = new Swiper('.swiper-container._top',{
		{ loop: true,
		effect:'fade',
		fadeEffect: {
			crossFade: true
		},
		autoplay: {
			delay: 5000,
		},
		pagination: {
			el: '.swiper-pagination',
			clickable:true,
		},
	});
</script>
