// JavaScript Document
window.onload=function(){
	var canvas = document.getElementById('cav');
	var cav=canvas.getContext('2d');//获取画布上下文
	//将第一行文字定义成一个数组
	var txt1=['降','价','促','销'];
	//设定字体大小为60像素，字体为隶书
	cav.font='60px 黑体';
	//设定字体颜色为#fef200
	cav.fillStyle='#fef200';
	var i=0;
	//使用定时器，使文字逐个出现  
	var ds=setInterval(txtline1,90)
	function txtline1(){
	cav.beginPath();//开始绘制
	cav.fillText(txt1[i],230,270);//绘制第i个文字
	cav.translate(70,0);//将文字向右平移70像素
	cav.fill();
	i++;
	//文字全部绘制时，取消定时器
	if(i==txt1.length)
	{clearInterval(ds)}
	};
	
setTimeout(txtline2,1000)
	function txtline2(){
	var txt2=['哪','家','强'];
	var j=0;
	var ds1=setInterval(function (){
	cav.beginPath();
	cav.fillText(txt2[j],290,340);
	cav.translate(70,0);
	cav.fill();
	j++;
	if(j==txt2.length)
	{clearInterval(ds1)}
	},90);
	cav.translate(-300,0);
	}}
