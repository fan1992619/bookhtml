// JavaScript Document
var cav = document.getElementById("cav").getContext("2d");
cav.fillStyle = "rgba(255,0,255,0.3)";//设置填充色
setInterval(show, 50)//每过50毫秒就调用一次函数
cav.translate(400, 330); //将平移的圆心平移至画布的圆心
var k = 0;
function show() {
	cav.clearRect(0, -10, 800, 600);
	cav.fillRect(10, 10, 60, 30);//
	cav.rotate(k*Math.PI / 5);//依次旋转Math.PI / 5弧度
	k++;
	if (k == 10) {//当绘制完成10个图形时，有重新绘制
		k = 0;
	}
}
