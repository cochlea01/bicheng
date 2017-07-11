define(function(reuqire, exports, module){
	var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        spaceBetween: 20,
        // 如果需要分页器
        pagination: '.swiper-pagination'
    }) 
    $('#btnPrev').click(function(){
	mySwiper.slidePrev();
	})
	$('#btnNext').click(function(){
	mySwiper.slideNext();
	})
});