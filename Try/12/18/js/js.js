// JavaScript Document
var cav = document.getElementById("cav").getContext("2d");
var txt = document.getElementById("txt");
var font = ['宋体', '楷体', '华文中魏', '华文行楷', '方正书体', '方正姚体'];
var style = ['#f00', '#ff0', '#f0f', 'rgb(132,50,247)', 'rgb(34,236,182)', 'rgb(147,239,115)'];
function go() {
	cav.clearRect(0, 0, 800, 600);
	ds = setInterval(drew, 300);
}
function stop() {
	clearInterval(ds);
}
function drew() {
	var i = Math.round(Math.random() * 6);
	cav.beginPath();
	cav.font = "100px " + font[i];
	cav.fillStyle = style[i];
	cav.fillText(txt.value, 300, 400);
	cav.fill();
}
