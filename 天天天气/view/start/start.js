
$(function(){
	
	var startWidth = $('#start').width();
	$('li').width(startWidth);
	var len = $('#active').children('li').length;
	$('ul').width($('li').width()*len + 'px');


	var mySwiper = new Swiper ('.swiper-container', {
	    direction: 'horizontal',
		loop: false,
			//分页符
		pagination: '.swiper-pagination',
		onTouchEnd:function(swiper){
			if(mySwiper.activeIndex == 2 && mySwiper.touches.diff<-80){
				window.location.href = "../index/index.html"
			}
		},
	});

})