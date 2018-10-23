// JavaScript Document
var cav = document.getElementById("cav").getContext("2d");
cav.strokeStyle = "rgb(200,191,231)";//线条颜色
cav.translate(400, 300)//平移旋转中心
setInterval(function () {   //定时器实现动态旋转效果

	drew(100, 0);//绘制横着的绳子和小球
	drew(0, 100);//绘制竖着的绳子和小球
	drew(50, 50);//绘制反斜杠方向的绳子和小球
	drew(-50, 50);//绘制斜杠方向的绳子和小球
}, 10)
function drew(x, y) {
		cav.clearRect(-110, -110, 400, 300);
	cav.rotate(1);//将画布旋转1度
	cav.beginPath();//绘制绳子
	cav.moveTo(-x, -y);//绳子起点
	cav.lineTo(x, y);//绳子终点
	cav.stroke();
	cav.fillStyle = "rgb(248,144,31)";//小球颜色
	cav.beginPath();//绘制小球
	cav.arc(-x, -y, 10, 0, Math.PI * 2);
	cav.fill();
	cav.beginPath();
	cav.fillStyle = "rgb(64,188,200)";
	cav.arc(x, y, 10, 0, Math.PI * 2);
	cav.fill();
}
