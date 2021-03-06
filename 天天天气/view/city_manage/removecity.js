$(function(){
	//获取每一行
	var oDelete = $('.citys');
	var len = oDelete.length;
	var lastX, lastXForMobile;
    // 用于记录被按下的对象
    var pressedObj;  // 当前左滑的对象
    var lastLeftObj; // 上一个左滑的对象
    // 用于记录按下的点
    var start;
    // 网页在移动端运行时的监听
    var oDel = $('.btn');
    var olen = oDel.length;
    console.log(olen);
    for(var i = 0; i < len; i++){
    	oDelete[i].addEventListener('touchstart',function(e){
    		lastXForMobile = e.changedTouches[0].pageX;
    		pressedObj = this; // 记录被按下的对象 
            // 记录开始按下时的点
            var touches = event.touches[0];
            start = { 
                x: touches.pageX, // 横坐标
                y: touches.pageY  // 纵坐标
            };
    	});
    	oDelete[i].addEventListener('touchmove',function(e){
    		// 计算划动过程中x和y的变化量
    		var touches = event.touches[0];
    		delta = {
                x: touches.pageX - start.x,
                y: touches.pageY - start.y
            };
            // 横向位移大于纵向位移，阻止纵向滚动
            if (Math.abs(delta.x) > Math.abs(delta.y)) {
                event.preventDefault();
            }
    	});
    	oDelete[i].addEventListener('touchend',function(e){
    		if (lastLeftObj && pressedObj != lastLeftObj) { // 点击除当前左滑对象之外的任意其他位置
                $(lastLeftObj).animate({marginLeft:"0"}, 300); // 右滑
                lastLeftObj = null; // 清空上一个左滑的对象
            } 
            var diffX = e.changedTouches[0].pageX - lastXForMobile;
            if (diffX < -150) {
                $(pressedObj).animate({marginLeft:"-80px"}, 300); // 左滑
                lastLeftObj && lastLeftObj != pressedObj && 
                    $(lastLeftObj).animate({marginLeft:"0"}, 300); // 已经左滑状态的按钮右滑
                lastLeftObj = pressedObj; // 记录上一个左滑的对象
            } else if (diffX > 150) {
              if (pressedObj == lastLeftObj) {
                $(pressedObj).animate({marginLeft:"0"}, 300); // 右滑
                lastLeftObj = null; // 清空上一个左滑的对象
              }
            }
    	});
    }

     // 网页在PC浏览器中运行时的监听
     for (var i = 0; i < len; ++i) {
        $(oDelete[i]).bind('mousedown', function(e){
            lastX = e.clientX;
            pressedObj = this; // 记录被按下的对象
        });
        $(oDelete[i]).bind('mouseup', function(e){
            if (lastLeftObj && pressedObj != lastLeftObj) { // 点击除当前左滑对象之外的任意其他位置
                $(lastLeftObj).animate({marginLeft:"0"}, 500); // 右滑
                lastLeftObj = null; // 清空上一个左滑的对象
            }
            var diffX = e.clientX - lastX;
            if (diffX < -150) {
                $(pressedObj).animate({marginLeft:"-80px"}, 500); // 左滑
                lastLeftObj && lastLeftObj != pressedObj && 
                    $(lastLeftObj).animate({marginLeft:"0"}, 500); // 已经左滑状态的按钮右滑
                lastLeftObj = pressedObj; // 记录上一个左滑的对象
            } else if (diffX > 150) {
              if (pressedObj == lastLeftObj) {
                $(pressedObj).animate({marginLeft:"0"}, 500); // 右滑
                lastLeftObj = null; // 清空上一个左滑的对象
              }
            }
        });
    }

    $('.btn').click(function(){
    	$(this).parent().remove();
    });
})