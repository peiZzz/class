$(function(){
	$('#prev').click(function(){
		window.history.back(-1);
	})
	// $('#register').click(function(){
	// 	window.location.href=".././register/register.html";
	// })
	$('#five').click(function(){
		
		$('#num').html(parseInt($(this).next().text())+1);
	})
})