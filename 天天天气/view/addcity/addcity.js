$(function(){
	$('#prev').click(function(){
		window.history.back(-1);
	})
	
	$('#emmm>span').click(function(){
		var len=$('#emmm>span').length;
		// $('#emmm>span').index(this);
		console.log($(this).text());
		
	})
	// alert()
})