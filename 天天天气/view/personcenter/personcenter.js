$(function(){
	$('#prev').click(function(){
		window.history.back(-1);
	})
	$('#setup').click(function(){
		window.location.href=".././set up/setup.html";
	})
	$('#weather').click(function(){
		window.location.href=".././weekweather/weekweather.html";
	})
	$('#near_scene').click(function(){
		window.location.href=".././Near scene/near_scene.html";
	})
	$('#toggle').click(function(){
		if( $(this).hasClass("onOff") ){
             $(this).removeClass("onOff");
             $(this).children('div').css("left","0px");
             $(this).children('div').css("background","#1db63d");
			$(this).css("background","#FFF")

		}else{
			$(this).addClass("onOff");
			$(this).children('div').css("left","18px");
			$(this).children('div').css("background","#FFF");
			$(this).css("background","#1db63d")
		}
		
	});
})
