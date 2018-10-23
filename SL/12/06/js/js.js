// JavaScript Document
var ctx = document.getElementById("cav")
var cav = ctx.getContext("2d");
//中心平移至画布中心
cav.translate(ctx.width / 2, ctx.height / 2);
function big() {
	//清除一块矩形
	cav.clearRect(-25, -25, 50, 50);
	var img = new Image();
	img.src = "img/flower.png";//绘制图像的路径
	img.onload = function () {
		//图像的起点坐标为（-25，-25），宽高都为50像素
		cav.drawImage(img, -25, -25, 50, 50);
	}
	cav.scale(1.05, 1.05);//横向和纵向都放大1.05倍
}