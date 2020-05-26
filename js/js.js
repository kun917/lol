window.addEventListener('load', function(e) {
	(function() {
		$(".head-nav-title>ul>li").css({
			"margin-top": "80px",
			"margin-left": "36px",
			"width": "120px",
			"height": "300px",
			"float": "left",
		})
		$(".head-nav-title>ul").css("margin-left", "480px");
		var headNav3 = $(".headNav3>span");
		for (var i = 0; i < $(".headNav3>span").length; i++) {
			headNav3[i].style.left = i * 150 + 'px';
		}
		//滚动播放
		var body1 = document.querySelector(".body-1-3").querySelector("ul").querySelectorAll("li");
		var body2 = document.querySelector(".body-1-4")
		var a = 0;
		var timerT = null;
		body1[a].style.backgroundColor = "white";
		body1[a].style.borderBottom = "2px solid saddlebrown";
		//开启定时器
		timerTs();
		//定时器
		function timerTs() {
			timerT = setInterval(function() {
				if (a == 5) {
					a = 0;
				}
				for (var i = 0; i < body1.length; i++) {
					body1[i].style.backgroundColor = '#e5e5e5'
					body1[i].style.borderBottom = '';
				}
				body1[a].style.backgroundColor = "white";
				body1[a].style.borderBottom = "2px solid saddlebrown";
				var j = a * 820;
				animateLeft(body2, -j);
				a++;
			}, 3000)
		}
		for (var i = 0; i < body1.length; i++) {
			body1[i].setAttribute('index', i);
		}
		for (var i = 0; i < body1.length; i++) {
			body1[i].addEventListener('mouseover', function() {
				for (var i = 0; i < body1.length; i++) {
					body1[i].style.backgroundColor = '#e5e5e5';
					body1[i].style.borderBottom = '';
				}
				this.style.backgroundColor = "white";
				this.style.borderBottom = "2px solid saddlebrown";
				//添加暂停
				clearInterval(timerT);
				a = this.getAttribute('index');
				var b = a * 820
				animateLeft(body2, -b)
			})
		}
		//移除暂停
		var bodyUl = $(".body-1-3>ul").get(0);
		bodyUl.onmouseleave = function() {
			timerTs();
		}
	})()
	//显示二维码
	var li = document.querySelector(".headNav4").querySelectorAll('li');
	var dengR = document.querySelector(".headNav5");
	var dengR1 = document.querySelector(".headNav5-1");
	li[1].addEventListener('mousemove', function() {
		$(".headNave5-fj").get(0).style.display = "block";
		animateTop($(".headNave5").get(0), 40);
	})
	li[1].addEventListener('mouseleave', function() {
		$(".headNave5-fj").get(0).style.display = "none";
		$(".headNave5").get(0).style.top = "15px";
	})
	//登入下拉显示
	dengR.addEventListener('mouseenter', function() {
		dengR1.style.display = "block";
		animateTop(dengR1, 0, function() {
			dengR.addEventListener('mouseleave', function() {
				dengR1.style.display = "none";
				dengR1.style.top = "-100px"
			})
		})
	})
	//页面进入模块
	document.addEventListener('scroll', function() {
		$(".headNav").animate({
			height: "360px",
		}, function() {
			$(".headNav").get(0).style.backgroundImage = "url(./img/yu/a.png)";
			$("header").css("height", "360px");
		})

	})
	//导航栏子栏显示
	$(".headNav3").mouseover(function() {
		$(".head-nav-title").get(0).style.display = "block";
		animateTop($(".head-nav-title").get(0), 0);
	})
	$(".headNav3").mouseleave(function() {
		$(".head-nav-title").get(0).style.display = "none";
		$(".head-nav-title").get(0).style.top = "-20px";
	})
	var bodyTwoLi = document.querySelector('.body-1-2-1').querySelectorAll('li');
	var bodyTwoDiv = document.querySelector('.body-1-2-2').querySelectorAll('div');
	var bodyTwoLiA = $(".body-1-2-1>li>a");
	bodyTwoLiA[0].style.color = '#00abab';
	bodyTwoLiA[0].style.fontWeight = '600';
	bodyTwoLi[0].style.borderBottom = '2px solid #00abab';
	//将所有的选项卡都隐藏
	for (var j = 0; j < bodyTwoDiv.length; j++) {
		bodyTwoDiv[j].className = 'None';
	}
	//第一个选项卡显示
	bodyTwoDiv[0].className = 'NoneS';
	for (var i = 0; i < bodyTwoLi.length; i++) {
		bodyTwoLi[i].setAttribute('data-indexTwo', i);
		// console.log(bodyTwoLi[i].getAttribute('data-indexTwo'))
		bodyTwoLi[i].addEventListener('mouseover', function() {
			var ac = this.getAttribute('data-indexTwo');
			for (var j = 0; j < bodyTwoDiv.length; j++) {
				bodyTwoDiv[j].className = 'None';
				bodyTwoLiA[j].style.color = '';
				bodyTwoLiA[j].style.fontWeight = '';
				bodyTwoLi[j].style.borderBottom = '';
			}
			bodyTwoLiA[ac].style.color = '#00abab';
			bodyTwoLiA[ac].style.fontWeight = '600';
			bodyTwoLi[ac].style.borderBottom = '2px solid #00abab';
			bodyTwoDiv[ac].className = 'NoneS';
		})
	}
	///原生态js用起来有点累还是jQuery方便点
	var video1 = $("video").get(0);
	// console.log(video1)
	video1.play(); //取消谷歌默认禁止播放事件
	$(".body-2-1-1>div").eq(0).show();
	$(".body-2-1>ul>li").eq(0).css("border-bottom", "2px solid #00ABAB")
	$(".body-2-1>ul li a").eq(0).css("color", "#00ABAB")
	$(".body-2-1>ul>li").hover(function() {
		var index1 = $(this).index() - 1;
		$(this).css("border-bottom", "2px solid #00ABAB")
		$(this).siblings().css("border-bottom", "")
		$(".body-2-1>ul li a").css("color", "")
		$(".body-2-1>ul li a").eq(index1).css("color", "#00ABAB")
		$(".body-2-1-1>div").eq(index1).show();
		$(".body-2-1-1>div").eq(index1).siblings().hide();
	})
	$(".body-2-1-1 span").on({
		mouseover:function(){
			$(this).children("a").children("p").show()
			$(this).children("a").children("h5").css("color", "#00ABAB")
			$(this).stop().animate({
				top:"10px"
			},300)
			// console.log($(this).children("a").children("p3"))
		},
		mouseleave:function(){
			$(this).children("a").children("p").hide()
			$(this).children("a").children("h5").css("color","")
			$(this).stop().animate({
				top:"20px"
			},300)
		}
	})
	//热门活动选项卡布局 
	function EachOne(element1){
		var spanLeft = 20;
		$.each(element1, function(index, element) {
		 element.style.left=spanLeft+"px";
			spanLeft += 200;
		})
	}
	EachOne($(".body-2-1-1-1 span"));
	EachOne($(".body-2-1-1-2 span"));
	EachOne($(".body-2-1-1-3 span"));
	
		//最新视频布局  （直接扣上面的因为布局都差不多就懒得再写了）
		function EachBuju(element1){
			var sl=20;
			var spanLeftThre = 20;
			$.each(element1, function(index, element) {
			 element.style.left=spanLeftThre+"px";
				spanLeftThre += 200;
				if(spanLeftThre>820){
					$(element).css({
						"top":"220px",
						"left":sl+"px"
					})
					sl+=200;
				}
			})
		}
		EachBuju($(".body-3-1-1-1 span"));
		EachBuju($(".body-3-1-1-2 span"));
		EachBuju($(".body-3-1-1-3 span"));
		EachBuju($(".body-3-1-1-4 span"));
		EachBuju($(".body-3-1-1-5 span"));
		EachBuju($(".body-3-1-1-6 span"));
	//最新视频 选项卡
	$(".body-3-1-1-1").show();
	$(".body-3-1>ul>li").eq(0).css("border-bottom", "2px solid #00ABAB")
	$(".body-3-1>ul li a").eq(0).css("color", "#00ABAB")
	$(".body-3-1>ul>li").hover(function() {
		var index2 = $(this).index() - 1;
		$(this).css("border-bottom", "2px solid #00ABAB")
		$(this).siblings().css("border-bottom", "")
		$(".body-3-1>ul li a").css("color", "")
		$(".body-3-1>ul li a").eq(index2).css("color", "#00ABAB")
		$(".body-3-1-1>div").eq(index2).show();
		$(".body-3-1-1>div").eq(index2).siblings().hide();
	})
	$(".body-3-1-1 span").on({
		mouseover:function(){
			$(this).children("a").children("p").show()
			$(this).children("a").children("h5").css("color", "#00ABAB")
		},
		mouseleave:function(){
			$(this).children("a").children("p").hide()
			$(this).children("a").children("h5").css("color","")
		}
	})
	//热门专辑 （同上直接扣）
	//布局
	function EachTwo(element1){
		var spanLeft = 16;
		$.each(element1, function(index, element) {
		 element.style.left=spanLeft+"px";
			spanLeft += 160;
		})
	}
	EachTwo($(".body-3-1-2-1 span"));
	EachTwo($(".body-3-1-2-2 span"));
	EachTwo($(".body-3-1-2-3 span"));
	EachTwo($(".body-3-1-2-4 span"));
	EachTwo($(".body-3-1-2-5 span"));
	EachTwo($(".body-3-1-2-6 span"));
	EachTwo($(".body-3-1-2-7 span"));
	//热门专辑 选项卡
	$(".body-3-1-2-1").show();
	$(".body-3-2>ul>li").eq(0).css("border-bottom", "2px solid #00ABAB")
	$(".body-3-2>ul li a").eq(0).css("color", "#00ABAB")
	$(".body-3-2>ul>li").hover(function() {
		var index3 = $(this).index() - 1;
		$(this).css("border-bottom", "2px solid #00ABAB")
		$(this).siblings().css("border-bottom", "")
		$(".body-3-2>ul li a").css("color", "")
		$(".body-3-2>ul li a").eq(index3).css("color", "#00ABAB")
		$(".body-3-2-1>div").eq(index3).show();
		$(".body-3-2-1>div").eq(index3).siblings().hide();
	})
	$(".body-3-2-1 span").on({
		mouseover:function(){
			$(this).children("a").children("p").show()
			$(this).children("a").children("h5").css("color", "#00ABAB")
		},
		mouseleave:function(){
			$(this).children("a").children("p").hide()
			$(this).children("a").children("h5").css("color","")
		}
	})
	//死兆星 锤石
	$(".body2-3-2-1>div").hover(function(){
		$(".body2-3-2-1>div>img").show();
	},function(){
		$(".body2-3-2-1>div>img").hide();
	})
	//男刀图片更换
	$(".body2-3-2-1>img").hover(function(){
		$(".body2-3-2-1>img").prop("src","img/yu/a%20(10).png");
	},function(){
		$(".body2-3-2-1>img").prop("src","img/yu/a%20(11).png");
	})
	//视频播放控制
	$("#videoTwo").hover(function(){
		$("#videoTwo>video").css({
			"width":"450px",
			"height":"300px",
			"margin-left":"-10px",
			"margin-top":"-10px"
		})
		 $("#videoTwo>video").get(0).controls="controls";
     $("#videoTwo>video").get(0).play();
		$(".body2-3-3").stop().slideDown()
		$(".body2-3-over").stop().animate({
			top:"140px"
		})
		$(".body2-3").stop().animate({
			height:"476px"
		})
	},function(){
		$("#videoTwo>video").css({
			"width":"",
			"height":"",
			"margin-left":"",
			"margin-top":""
		})
		$("#videoTwo>video").get(0).controls="";
		//谷歌控制台会报错，但功能却还在，这很玄学
		$("#videoTwo>video").get(0).load();
		$(".body2-3-3").stop().slideUp()
		$(".body2-3-over").stop().animate({
			top:""
		})
		$(".body2-3").stop().animate({
			height:"336px"
		})
	})
	//新英雄万豪
	$(".body2-3-1 span p2").hide();
	$(".body2-3-1 span").hover(function(){
		$(".body2-3-1 span p2").show();
	},function(){
		$(".body2-3-1 span p2").hide();
	})
	// 周免
	$(".body2-3-2-2 span").hover(function(){
		$(".noMoney").show()
	},function(){
		$(".noMoney").hide()
	})
	//返回顶部
	document.addEventListener("scroll",function(){
		   var wTop=window.pageYOffset;
			 if(wTop>$(".body").get(0).offsetTop){
				$(".upWard").animate({
					right:"0px",
				})
				$("#top").slideDown()
					
			}else{
				
				$("#top").slideUp()
			}
	})
	$("#top").on('click',function(){
			animateWindowTop();
	})
	// FANART创作馆
	var b4=0;
	var b5=0;
	//内容布局
	$(".body-4-1 div").each(function(index,element){
		if(b4>600){
			$(element).css({
			"top":"220px",
			"left":b5+"px"
			})
			 b5+=200;
		}else{
		$(element).css({
		"top":"20px",
		"left":b4+"px"
		})
			b4+=200;
		}
	})
	$(".body-4-1 div").hover(function(){
		$(this).children("img").css({
			"width":"220px",
			"height":"220px"
		})
		$(this).children("span").stop().animate({
			top:"130px"
		},500)
	},function(){
		$(this).children("img").css({
			"width":"",
			"height":""
		})
		$(this).children("span").stop().animate({
			top:"180px"
		},500)
	})
	$("#imgOver").hover(function(){
		$(this).stop().animate({
			top:"-20px"
		},400)
	},function(){
		$(this).stop().animate({
			top:"-10px"
		},400)
	})
})
