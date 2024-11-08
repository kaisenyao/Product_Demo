//计时器
var timer;
//获取音乐
var music = document.getElementById("music"); 

//点击事件
var cymbal = document.getElementById("cymbal");
cymbal.onclick = function(){
	start("cymbal",13);
	music.src = "mp3/pia.mp3";
	music.play();
}

var drink = document.getElementById("drink");
drink.onclick = function(){
	start("drink",81);
}

var eat = document.getElementById("eat");
eat.onclick = function(){
	start("eat",40);
}

var fart = document.getElementById("fart");
fart.onclick = function(){
	start("fart",28);
	music.src = "mp3/pi.wav";
	music.play();
}

var pie = document.getElementById("pie");
pie.onclick = function(){
	start("pie",24);
}

var scratch = document.getElementById("scratch");
scratch.onclick = function(){
	start("scratch",56);
}
//额头
var knockout = document.getElementById("knockout");
knockout.onclick = function(){
	start("knockout",81);
}
//左脚
var footRight = document.getElementById("footRight");
footRight.onclick = function(){
	start("footRight",30);
}
//右脚
var footLeft = document.getElementById("footLeft");
footLeft.onclick = function(){
	start("footLeft",30);
}
//鼻子
var angry = document.getElementById("angry");
angry.onclick = function(){
	start("angry",26);
}
//肚子
var stomach = document.getElementById("stomach");
stomach.onclick = function(){
	start("stomach",34);
	music.src = "mp3/tomaiyou.mp3";
	music.play();
}
//封装函数,切换图片(图片名称,图片总数)
function start(name,count){
//	将上一次动画清除
	clearInterval(timer);
//	初始化下标
	var index = 0;
//	获取元素
	var cat = document.getElementById("cat");
//	设置计时器 setInterval(函数,间隔时间:毫秒)
	timer = setInterval(function(){
//		切换图片
//		判断是否为最后一张图片
		if(++index < count){
			cat.src = imgSrc(name,index);
		}else{
//			清除计时器
			clearInterval(timer);
		}
	},80);
}

//封装函数,拼接图片路径(动画名称,当前下标)
function imgSrc(name,index){
//	img/Animations/angry/angry_00.jpg
	return "img/Animations/"+name+"/"+name+"_"+indexImg(index)+".jpg";
}

//函数封装，解决图片名是否带0
function indexImg(index){
	if(index < 10){
		return "0"+index;
	}else{
		return index;
	}
}
