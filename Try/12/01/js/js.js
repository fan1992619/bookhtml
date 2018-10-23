// JavaScript Document
var cav = document.getElementById("cav").getContext("2d");
cav.lineWidth = 5;
cav.strokeStyle = "rgb(205,244,29)";
cav.fillStyle = "rgb(26,243,145)";
for (var i = 0; i < 30; i++) {
	cav.rect(400 - 10 * i, 300 - 10 * i, i * 20, i * 20);
	cav.fill();
	cav.stroke();
}
