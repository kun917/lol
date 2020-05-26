 
	//这是一个缓动位置的函数
	function animateLeft(obj,targe,callback){
		//清除以前的定时器，只保留当前的一个定时器
		clearInterval(obj.timer);
		//开启定时器
		//直接定义obj的属性为一个定时器这样可以优化内存//而且调用也可以减少冲突
		obj.timer=setInterval(function(){
			// console.log(obj.offsetLeft)
			var step=(targe-obj.offsetLeft)/10;
			step = step > 0 ? Math.ceil(step) : Math.floor(step);
			if(obj.offsetLeft==targe){
				//停止定时器
				clearInterval(obj.timer);
			}
			obj.style.left=(obj.offsetLeft+step)+"px";
			//判段如果有函数就执行这个回调函数
			callback && callback();
		},15)
	}
	//这是一个缓动位置的函数，回到顶部的函数
	function animateWindowTop(targe,callback){
		//清除以前的定时器，只保留当前的一个定时器
		if(! targe) targe=0;
		//targe 返回你想要的位置 0 为回到最顶部 默认值为0
		clearInterval(window.timer);
		//开启定时器
		window.timer=setInterval(function(){
			var step=(targe-window.pageYOffset)/10;
			step = step > 0 ? Math.ceil(step) : Math.floor(step);
			if(window.pageYOffset==targe){
				//停止定时器
				clearInterval(window.timer);
			}
			var y=window.pageYOffset+step;
			window.scroll(0,y);
			//判段如果有函数就执行这个回调函数
			callback && callback();
		},15)
	}
	//这是一个缓动位置的函数
	function animateTop(obj,targe,callback){
		//清除以前的定时器，只保留当前的一个定时器
		clearInterval(obj.timer);
		//开启定时器
		//直接定义obj的属性为一个定时器这样可以优化内存//而且调用也可以减少冲突
		obj.timer=setInterval(function(){
			var step=(targe-obj.offsetTop)/10;
			step = step > 0 ? Math.ceil(step) : Math.floor(step);
			if(obj.offsetTop==targe){
				//停止定时器
				clearInterval(obj.timer);
			}
			obj.style.top=(obj.offsetTop+step)+"px";
			//判段如果有函数就执行这个回调函数
			callback && callback();
		},15)
	}
    //顶部菜单栏固定
       function TOP(obj,targe,callback){
       	callback && callback();
       	if(window.pageYOffset>=targe){
       		obj.style.position="fixed";
       		obj.style.top=0;
       	}else{
       		obj.style.position="";
       		obj.style.top=targe+'px';
       	}
       	callback && callback();
       }