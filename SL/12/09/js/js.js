// JavaScript Document
var cav = document.getElementById("cav").getContext("2d");
var text = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130]
var temp = -Math.PI / (4 * 2.3); //旋转弧度
cav.textAlign = 'start'; //文本水平对齐方式
cav.textBaseline = 'middle'; //文本垂直方向，基线位置 
cav.font = "25px 黑体"; //字体和字号
cav.fillStyle = "rgb(2,167,255)"; //字体颜色
for (var i = 0; i < text.length; i++) {
	cav.save(); //保存当前绘制状态
	cav.beginPath(); //开始绘制
	cav.translate(270, 270); //将会至圆心移至画布中心
	cav.rotate(temp * i); //每个字的旋转角度
	cav.fillText(text[i], 115, 115); //逐个绘制，绘制起点为115，11，5
	cav.fill();
	cav.restore(); //恢复保存状态
}
