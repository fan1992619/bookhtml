// JavaScript Document
var cav = document.getElementById("cav").getContext("2d");
for (var i = 0; i < 10; i++) {//行数
	for (var k = 0; k < 8; k++) {//列数
		if ((i + k) % 2 == 0) {//圆形和正方形相互交错绘制
			cav.strokeStyle = "rgba(123,193,81,0.5)";//矩形的填充色
			cav.beginPath();//开始绘制
			cav.fillRect(i * 40, k * 40, 40, 40);//rect(x,y,w,h)
		} else {
			cav.fillStyle = "rgba(0,152,184,0.5)";//圆形的填充色
			cav.beginPath();//开始绘制
			cav.arc(20 + i * 40, 20 + k * 40, 20, 0, 2 * Math.PI);//arc(x,y,r,startAngle,endAngle)
		}

	}

}
