// JavaScript Document
var cav = document.getElementById("cav").getContext("2d");
function drew() {
	//圆形的相关参数
	var x = Math.round(Math.random() * 800);//圆形横坐标
	var y = Math.round(Math.random() * 600);//圆形纵坐标
	var r = Math.round(Math.random() * 40 + 1);//圆形半径
	var c = Math.round(Math.random() * 5);//圆形填充颜色
	circle(x, y, r, c);//调用绘制圆形的函数
}
function circle(x, y, r, c) {
	//用数组存放圆形填充颜色
	var style = ['rgba(255,0,0,0.5)', 'rgba(255,255,0,0.5)', 'rgba(255,0,255,0.5)', 'rgba(132,50,247,0.8)', 'rgba(34,236,182,0.5)', 'rgba(147,239,115,0.5)'];
	cav.beginPath();
	cav.fillStyle = style[c];
	cav.arc(x, y, r, 0, Math.PI * 2, true);//绘制圆形
	cav.fill();
}


