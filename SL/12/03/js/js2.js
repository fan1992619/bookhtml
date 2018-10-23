// JavaScript Document
var cav = document.getElementById("cav").getContext("2d");
cav.beginPath(); //body
cav.fillStyle = "#DC1534";
cav.moveTo(130, 90); //设置起点
//贝塞尔三次曲线绘制瓢虫身体
cav.bezierCurveTo(90, 100, 90, 170, 130, 180); //left
cav.bezierCurveTo(170, 170, 170, 100, 130, 90); //right
cav.fill();

cav.beginPath(); //head
cav.lineWidth = 3;
cav.moveTo(115, 99)
//贝塞尔三次曲线绘制瓢虫头部
cav.bezierCurveTo(120, 70, 139, 70, 145, 99);
cav.stroke();

cav.beginPath(); //feeler-left
cav.moveTo(125, 80)
cav.quadraticCurveTo(115, 55, 110, 75);
cav.stroke();

cav.beginPath(); //feeler-right
cav.moveTo(135, 80)
cav.quadraticCurveTo(145, 55, 150, 75);
cav.stroke();

circle(130, 130, 10, 130, 90, 130, 180); //center
circle(115, 115, 5, 105, 115, 90, 100); //left-top
circle(110, 140, 5, 100, 135, 85, 130); //left-center
circle(115, 160, 5, 105, 155, 90, 170); //left-bottom
circle(145, 115, 5, 155, 115, 170, 100); //right-top
circle(150, 140, 5, 160, 135, 175, 130); //right-center
circle(145, 160, 5, 155, 155, 170, 170); //right-bottom
//x,y,r为七星瓢虫背部的圆圈的圆心和半径,x1,y1,x2,y2为绘制昆虫六只脚的起点和终点
function circle(x, y, r, x1, y1, x2, y2) { //ciecle
	cav.beginPath(); //绘制七星瓢虫背部的圆圈
	cav.strokeStyle = "#b28335";
	cav.fillStyle = "#000";
	cav.arc(x, y, r, 0, Math.PI * 2, true);
	cav.fill();
	cav.stroke();
	cav.beginPath(); //绘制直线实现七星瓢虫脚
	cav.strokeStyle = "#000";
	cav.lineWidth = 3;
	cav.moveTo(x1, y1);
	cav.lineTo(x2, y2);
	cav.stroke();
}
