// JavaScript Document	
var cav=document.getElementById("cav").getContext("2d");
	var i=0;
	function go(){
		if(i<69){
		cav.clearRect(50,400,150,150);//清空出一块矩形
		var img =new Image();
	img.src="img/car.png";//图形路径
		img.onload=function (){//当图片被加载时，执行此函数
		//绘制img图形，图形起点坐标为（50,500），宽高都为50像素
		cav.drawImage(img,50,400,150,150);
	}
	cav.translate(10,0);//画布向右平移10像素
		i++;
	}
	if(i==69){
		alert("前方没路了，不能再前进了")
	}}