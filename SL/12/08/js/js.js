// JavaScript Document
var txt = document.getElementById("txt");
var cav = document.getElementById("cav").getContext("2d");
var font = ['宋体', '楷体', '华文中魏', '华文行楷', '方正书体', '方正姚体'];//字体
//文字颜色
var style = ['#f00', '#ff0', '#f0f', 'rgb(132,50,247)', 'rgb(34,236,182)', 'rgb(147,239,115)']
function draw() {
	//奖上一次绘制的文字清除
	cav.clearRect(0, 0, 600, 800);
	//生成一个随机数，实现随机字体和文字颜色
	var i = Math.round(Math.random() * 6);
	cav.beginPath();
	cav.font = "80px " + font[i];
	cav.strokeStyle = style[i];
	cav.strokeText(txt.value, 300, 300);//绘制轮廓文字
	cav.stroke();
}
