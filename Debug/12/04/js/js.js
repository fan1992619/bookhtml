// JavaScript Document
var cav=document.getElementById("cav").getContext("2d");
cav.fillStyle="#f0f";   //设置线条颜色
cav.translate(400,200);   //先平移旋转中心
cav.rotate(Math.PI/4);    //将画布旋转
var row=15;      //行
cav.font="30px 宋体";// 字体和字号
for(var i=0;i<row;i++){   //行
	for(var k=0;k<row-i;k++){   //列
		cav.strokeText("*",i*20,k*20); //绘制星号
	}
}
