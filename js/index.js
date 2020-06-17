$(document).ready(function(){
	var $scrlis = $('#scrfix li');
	$($scrlis).addClass('iconfont position-relative   ')
	$('#scrfix li').hover(function(){
		$(this).css('color','#ff6700');
		$(this.lastElementChild).fadeIn(300)
	},function(){
		$(this.lastElementChild).fadeOut(300)
		$(this).css('color','#757575');
	})
	$('#header ul').addClass('d-flex m-0 p-0');
	$('#banner .nav>ul').addClass('d-flex');
	// $('#header li a').height();
	$('#header li').after('<span>|</span>');
	$('#header li:not(#header ul:eq(1) li:last)').addClass('pt-2 pb-2');
	$('#header li~span').addClass('pt-2 pb-2');
	$('#header ul>span:last-child').remove('span');
	// $('#header ul:eq(1) li:last').addClass('pt-2 pb-2');
	// console.log($('.header-top').height())
	
	$("#banner .search input[type=submit]").hover(function(){
	    timer = setTimeout(function(){ 
	        $('#banner .search input[type=submit]').animate({
				backgroundColor:'#ff6709',
				color:'#fff',
			},"1")
	    },1)},function() {
			clearTimeout(timer);
			$('#banner .search input[type=submit]').animate({
				backgroundColor:'#fff',
				color:'#aaa',
			},"1")
		}
	)
	// $("#banner .search input[type=submit]").hover(function(){
	//         $('#banner .search input[type=submit]').animate({
	// 			backgroundColor:'#ff6709',
	// 			color:'#fff',
	// 		},"1")},function() {
	// 		$('#banner .search input[type=submit]').animate({
	// 			backgroundColor:'#fff',
	// 			color:'#333',
	// 		},"1")
	// 	}
	// )
	$('#banner .search').hover(
		function() {
			$('#banner .search input').animate({
				borderColor:'#b0b0b0',
			},"5")
		},function() {
			$('#banner .search input').animate({
				borderColor:'#e0e0e0',
			},"5")
		}
	);
	var $childimgs = $('#banner .nav .nav-child ul li img');
	var $childnames = $('#banner .nav .nav-child ul li p:even');
	var $childpars = $('#banner .nav .nav-child ul li p:odd');
	var xiaomiSrc = ['img/xiaomi-1.jpg','img/xiaomi-2.jpg','img/xiaomi-3.jpg','img/xiaomi-4.jpg','img/xiaomi-5.jpg','img/xiaomi-6.jpg'];
	var xiaomiName = ['小米CC9 Pro','小米9Pro 5G','小米CC9','小米CC9e','小米CC9 美图定制版','小米MIX 3'];
	var xiaomiPar = ['2799元起','3699元起','1699元','1099元','1999元','2599元'];
	var redmiSrc = ['img/redmi-1.jpg','img/redmi-2.jpg','img/redmi-3.jpg','img/redmi-4.jpg','img/redmi-5.jpg','img/redmi-6.jpg'];
	var redmiName = ['Redmi K30','Redmi K30 5G','Redmi 8A','Redmi note 8','Redmi K20 Pro 尊享版','Redmi note 8 Pro'];
	var redmiPar = ['1599元起','1999元起','699元起','999元起','2399元起','1199元起'];
	var tvSrc = ['img/tv-1.jpg','img/tv-2.jpg','img/tv-3.jpg','img/tv-4.jpg','img/tv-5.jpg','img/tv-6.jpg'];
	var tvName = ['红米电视 70英寸 R70A','小米壁画电视 65英寸','小米全面屏电视E55A','小米电视4A 32英寸','小米电视4A 55英寸','小米电视4A 65英寸'];
	var tvPar = ['3599元','6999元','1799元','699元','1699元','2599元'];
	var computerSrc = ['img/computer-1.jpg','img/computer-2.jpg','img/computer-3.jpg','img/computer-4.jpg','img/computer-5.jpg','img/computer-6.jpg'];
	var computerName = ['RedmiBook 13','小米笔记本Pro 15.6"','RedmiBook 14','游戏本2019款','小米笔记本 15.6"','小米笔记本Air 12.5"'];
	var computerPar = ['4499元起','4499元起','3999元起','7299元起','3799元起','3299元起'];
	var houseSrc = ['img/house-1.jpg','img/house-2.jpg','img/house-3.jpg','img/house-4.jpg','img/house-5.jpg','img/house-6.jpg'];
	var houseName = ['米家互联网空调C1（一级能效）','米家互联网空调（一级能效）','Redmi全自动波轮洗衣机1A','米家互联网洗烘一体机10kg','小米净水器','米家扫地机器人'];
	var housePar = ['2599元','2399元','699元','1999元','1699元','1399元'];
	var routerSrc = ['img/router-1.jpg','img/router-2.jpg','img/router-3.jpg','img/router-4.jpg','img/router-5.jpg','img/router-6.jpg'];
	var routerName = ['Redmi路由器AC2100','小米路由器AC2100','小米路由器 Mesh','小米路由器4A 千兆版','小米路由器 4C','小米路由器 4A'];
	var routerPar = ['169元','229元','999元','129元','59元','99元'];
	var aiSrc = ['img/AI-1.jpg','img/AI-2.jpg','img/AI-3.jpg','img/AI-4.jpg','img/AI-5.jpg','img/AI-6.jpg'];
	var aiName = ['小米米家智能摄像机云台版','小米小爱老师','小米米家智能门锁','小米小爱触屏音箱','Redmi小爱音箱 Play','查看全部'];
	var aiPar = ['179元','449元','1299元','699元','79元',''];
	
	var $banlis = $('#banner .nav>ul>li:not(.not)');
	$($banlis).each(function(index) {
		// console.log(this)
		$(this).mouseover(function(){
			// console.log(index);
			if(index == 0) {
				$($childimgs).each(function(index) {
					$(this).attr('src',xiaomiSrc[index]);
				})
				$($childnames).each(function(index) {
					$(this).text(xiaomiName[index]);
				})
				$($childpars).each(function(index) {
					$(this).text(xiaomiPar[index]);
				})
			}else if(index == 1) {
				$($childimgs).each(function(index) {
					$(this).attr('src',redmiSrc[index]);
				})
				$($childnames).each(function(index) {
					$(this).text(redmiName[index]);
				})
				$($childpars).each(function(index) {
					$(this).text(redmiPar[index]);
				})
			}else if(index == 2) {
				$($childimgs).each(function(index) {
					$(this).attr('src',tvSrc[index]);
				})
				$($childnames).each(function(index) {
					$(this).text(tvName[index]);
				})
				$($childpars).each(function(index) {
					$(this).text(tvPar[index]);
				})
			}else if(index == 3) {
				$($childimgs).each(function(index) {
					$(this).attr('src',computerSrc[index]);
				})
				$($childnames).each(function(index) {
					$(this).text(computerName[index]);
				})
				$($childpars).each(function(index) {
					$(this).text(computerPar[index]);
				})
			}else if(index == 4) {
				$($childimgs).each(function(index) {
					$(this).attr('src',houseSrc[index]);
				})
				$($childnames).each(function(index) {
					$(this).text(houseName[index]);
				})
				$($childpars).each(function(index) {
					$(this).text(housePar[index]);
				})
			}else if(index == 5) {
				$($childimgs).each(function(index) {
					$(this).attr('src',routerSrc[index]);
				})
				$($childnames).each(function(index) {
					$(this).text(routerName[index]);
				})
				$($childpars).each(function(index) {
					$(this).text(routerPar[index]);
				})
			}else if(index == 6) {
				$($childimgs).each(function(index) {
					$(this).attr('src',aiSrc[index]);
				})
				$($childnames).each(function(index) {
					$(this).text(aiName[index]);
				})
				$($childpars).each(function(index) {
					$(this).text(aiPar[index]);
				})
			}
		})
	})
	$('#banner .nav .nav-child ul li').addClass('position-relative');
	$('#banner .nav .nav-child ul li>p').addClass('m-0');
	$childpars.addClass('pre');
	$childimgs.addClass('pl-4 pr-4')
	$('#banner .navBanner .mainnav ul li a').after('<span class="iconfont right float-right">&#xe699;</span>');
	$('#banner .navBanner .imgnav div>img').css({
		width:'316px',
		display:'inline-block',
		});
	$('#banner .imhomelist ul li').addClass('col-4 p-0 text-center');
	$('#banner .imhomelist ul li span').filter('span').addClass('iconfont d-block');
	// $('#banner .nav ul li div').css('display','none');
	// $('#banner .nav ul li:not(.serve,.community)').hover(function(){
	// $('#banner .nav ul li div').css({
	// 		display:'flex',
	// 		animation:'1s navspread'
	// 	})
	// },
	// function(){
	// 	$('#banner .nav ul li div').css({
	// 		display:'none',
	// 	})
	// })
	// $('#banner .nav ul div').css('display','none');
	var $childa = $('#banner .nav .child-a');
	
		
	
	$('#banner .nav>ul').hover(function() {
		$('#banner .nav ul div').css('display','block');
		$('#banner .nav ul div').animate({
			height:'272px',
		},500);
	},function() {
		$('#banner .nav ul div').animate({
			height:'50px',
		},500);
		clear = setTimeout(function() {
			$('#banner .nav ul div').css('display','none');
		},500);
	})
	$('#banner .nav>ul .not').mouseover(function() {
		$('#banner .nav ul div').animate({
			height:'50px',
		},500);
		clear = setTimeout(function() {
			$('#banner .nav ul div').css('display','none');
		},500);
	})
	var $banimgs = $('#banner .car img');
	$($banimgs).css('width','100%');
	$($banimgs).addClass('position-absolute');
	var $banlis = $('#banner .but li');
	function banner() {
		var index = 0;
		$($banimgs).eq(index).fadeIn().siblings().fadeOut();
		$($banlis).click(function(){
			index = $(this).index()
			$($banimgs).eq(index).fadeIn().siblings().fadeOut();
			$($banlis).eq(index).addClass('cli').siblings().removeClass('cli');
			
		})
		$('#banner .r-arr').click(function() {
			index < 4 ? index ++ : index = 0;
			$($banimgs).eq(index).fadeIn(500).siblings().fadeOut(500);
			$($banlis).eq(index).addClass('cli').siblings().removeClass('cli');
			console.log(index)
		})
		$('#banner .l-arr').click(function() {
			index > 0  ? index -- : index = 4;
			$($banimgs).eq(index).fadeIn(100).siblings().fadeOut(100);
			$($banlis).eq(index).addClass('cli').siblings().removeClass('cli');
			console.log(index)
		})
		function caruso() {
			var clear =  setInterval(function(){
				index > 4 ? index = 0 : index;
				$($banimgs).eq(index).fadeIn().siblings().fadeOut();
				$($banlis).eq(index).addClass('cli').siblings().removeClass('cli');
				index ++;
			}, 3000)
		}
		caruso();
	}
	banner();
	var seckillimg = [1,2,3,4,5,6,7,8,9,10,11,12]
	var seckillTit = ['贝医生儿童牙刷 蓝色','小米米家智能摄像机 白色','米家台灯1S 白色','MIJOY 抽纸青春版 24包/箱','小米路由器4A千兆版','小米小爱触屏音箱 白色','小米降噪耳机 黑色','贝医生儿童牙刷 粉色','小米小爱音箱 Pro 黑色','米家床头灯 金色','小米米家视频门铃 套餐','Yeelight LED 吸顶灯 白色']
	var seckillAlt = ['专业呵护宝宝智能牙齿','智能侦测 安全守护','A 级光学照度','精选原生竹浆，健康环保','双核全千兆AC1200路由器','好听，更好看','双动圈+动铁声学架构','专业呵护宝宝智能牙齿','语音遥控5000+品牌主流家电','如梦如幻，多彩光世界','是门铃也是门前的护卫','场景联动，好光好自然']
	var seckillPar = ['10','99','149','27.9','129','199','149','10','269','199','209','319']
	var seckillBefPar = ['19.9','129','179','329','169','299','299','19.9','299','249','299','379']
	$(seckillimg).each(function(index){
		$('#mimain .seckill .seckill-child ul').append("<li><a href=''><img src='img/seckill-" + seckillimg[index] +".jpg'> <h5>" + seckillTit[index] + "</h5><p>" + seckillAlt[index] + "</p><p><span>" + seckillPar[index] + "元</span><del>" + seckillBefPar[index] + "元</del></p></a></li>")

	})
	var $seckillAs = $('#mimain .seckill .seckill-child ul li a');
	$seckillAs.addClass('d-block');
	$('#mimain .seckill .seckill-child ul li a p').addClass('mb-1')
	var $hour = $('#mimain .timeout .hour')
	var $min = $('#mimain .timeout .min')
	var $sen = $('#mimain .timeout .sen')
	function timeout(){
		setInterval(function(){
			var myDate = new Date();
			var myhour = myDate.getHours();
			var mymin = myDate.getMinutes();
			var mysen = myDate.getSeconds();
			myhour < 14 ? after() : today();
			function today(){
				$hour.html(24-myhour+13);
				$min.html(60-mymin-1);
				$sen.html(60-mysen);
			}
			function after(){
				$hour.html(24-myhour-1);
				$min.html(60-mymin-1);
				$sen.html(60-mysen);
			}
		},500);
	}
	timeout();
	var phoneimg = ['1','2','3','4','5','6','7','8'];
	var phoneName = ['Redmi K30','Redmi K30 5G','小米CC9 Pro','小米9 Pro 5G','Redmi 8','Redmi 8A','Redmi Note 8 Pro','Redmi Note 8'];
	var phoneTit = ['120Hz流速屏，全速热爱','双模5G，120Hz流速屏','1亿像素 五摄四闪','5G双卡全网通，骁龙855Plus','5000mAh超长续航','5000mAh超长续航','6400万全场景四摄','千元4800万四摄'];
	
	var phonePar = ['1599','1999','2799','3699','699','699','1199','999'];
	$(phoneName).each(function(index){
		// $('#mimain .phone .right ul').append("<li class='comeup'><a href=''><img src='img/phone-" + phoneimg[index] +".jpg'> <h5 class='font-14 weight-300'>" + phoneName[index] + "</h5><p class='font-12'>" + phoneTit[index] + "</p><p class='font-14'>" + phonePar[index] + "元起</p></a></li>")
		$('#mimain .right ul').append("<li class='comeup'><a href=''><img src='img/phone-" + phoneimg[index] +".jpg'> <h5 class='font-14 weight-300'>" + phoneName[index] + "</h5><p class='font-12'>" + phoneTit[index] + "</p><p class='font-14'>" + phonePar[index] + "元起</p></a></li>")
	}) 
	
	// var householdimg
	// var householdName
	// var householdTit
	// var householdPar
	
	var linksn = [1,2,3,4,5,6];
	var links = '{"footer":['+
	    '{"name":"帮助中心", "child":["账户管理","购物指南","订单操作"]},'+
	    '{"name":"服务支持", "child":["售后政策","自助服务","相关下载"]},'+
	    '{"name":"线下门店", "child":["小米之家","服务网点","授权体验店"]},'+
	    '{"name":"关于小米", "child":["了解小米","加入小米","投资者关系"]},'+
	    '{"name":"关注我们", "child":["新浪微博","官方微信","联系我们"]},'+
	    '{"name":"特色服务", "child":["F码通道","礼物码","防伪查询"]}]}';
	link = JSON.parse(links);
	$(linksn).each(function(index){
		$('#footer .footer-links .left').append("<dl><dt>"+ link.footer[index].name +"</dt><dd>"+ link.footer[index].child[0] +"</dd><dd>"+ link.footer[index].child[1] +"</dd><dd>"+ link.footer[index].child[2] +"</dd></dl>");
	})
	$('#mimain .household h5 span b').css('cursor','pointe5');
	$('#mimain .household h5 span b').hover(function(){
		$('#mimain .household h5 span b').toggleClass('colorf670');
	},function(){
		$('#mimain .household h5 span b').toggleClass('colorf670');
	})
});
// function navspread(date) {
// 	var box = $('#banner .nav ul li div');
// 	var a = '123';
// 	$jsontip.empty();
// 	$.each(date,function(infoIndex, info){
// 		a += '姓名：' + info['name'] + '<br>';
// 		a += '价格：' + info['par'] + '<br>';
// 	})
// 	console.log(a);
// }