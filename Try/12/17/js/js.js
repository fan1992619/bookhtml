// JavaScript Document
var cav = document.getElementById("cav").getContext("2d");
setInterval(drew, 10)
function drew() {
	cav.translate(-1, 0);
	cav.clearRect(0, 0, 800, 600);
	cav.fillStyle = "#ff0";
	cav.font = "30px 华文新魏";
	cav.fillText("坦克大战限时免费，机不可失！！", 300, 150);
	cav.fill();
}
