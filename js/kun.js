/*css添加要加双引号，第一个参数是选项卡导航栏，地二个参数是选项卡的内容 第三个是点击是运行事件（是点击还是滑过） 第四个是css（可选）最后面的是回调函数（可选）
回调函数前一定要有css参数否则会立即执行该函数 
调用是直接kunTab() 如果有方法名冲突就这样写 Object.kunTab() */
;
(function() {
	Object.prototype.KunTab = function(element, element2,sj,newClass,callback) {
		element2.eq(0).show();
		newClass && $(element).eq(0).addClass(newClass);
		element.each(function(index, Element) {
			$(Element).on(sj, function(e) {
				e.stopPropagation();
				newClass && $(this).addClass(newClass);
				newClass && $(this).siblings().removeClass(newClass);
				element2.eq(index).show();
				element2.eq(index).siblings().hide();
				callback && callback();
			})
		})
	}
})()
//这是一个缓动位置的函数，回到顶部的函数
	function KunAnimateWindowTop(targe,callback){
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
	//顶部菜单栏固定
	   function KunTOP(obj,targe,callback){
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
	   //这是一个左右缓动位置的函数
	   function KunAnimateLeft(obj,targe,callback){
	   	clearInterval(obj.timer);
	   	obj.timer=setInterval(function(){
	   		var step=(targe-obj.offsetLeft)/10;
	   		step = step > 0 ? Math.ceil(step) : Math.floor(step);
	   		if(obj.offsetLeft==targe){
	   			clearInterval(obj.timer);
	   		}
	   		obj.style.left=(obj.offsetLeft+step)+"px";
	   		callback && callback();
	   	},15)
	   }
	   //这是一个向上下缓动位置的函数
	   function KunAnimateTop(obj,targe,callback){
	   	clearInterval(obj.timer);
	   	obj.timer=setInterval(function(){
	   		var step=(targe-obj.offsetTop)/10;
	   		step = step > 0 ? Math.ceil(step) : Math.floor(step);
	   		if(obj.offsetTop==targe){
	   			clearInterval(obj.timer);
	   		}
	   		obj.style.top=(obj.offsetTop+step)+"px";
	   		callback && callback();
	   	},15)
	   }

