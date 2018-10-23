// JavaScript Document
var cav = document.getElementById("cav").getContext("2d");
for (var j = 0; j < 10; j++) {//j为棋盘列数
	for (var i = 0; i < 10; i++) {//i为棋盘行数
		cav.beginPath();
		cav.strokeStyle = "rgb(147,109,70)";
		//每个格子的宽高都为50像素，语法rect(x, y, w, h)
		cav.rect(115 + j * 30, 85 + i * 30, 30, 30);
		cav.stroke();
	}
}
cav.beginPath();//棋盘外部的大正方形
cav.lineWidth=4;//设置线宽
cav.strokeRect(100,70,330,330);
cav.stroke();
