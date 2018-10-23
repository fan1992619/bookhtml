// JavaScript Document
var cav = document.getElementById("cav").getContext("2d");
function drew() {
	for (var k = 0; k < 5; k++) {
		cav.save();
		cav.translate(250, 250);
		cav.scale(1 + k * 0.7, 1 + k * 0.7);
		circle()
		cav.restore();
	}
}
function circle() {
	var style = ['rgba(132,50,247,0.3)', 'rgba(34,236,182,0.3)', 'rgba(255,0,0,0.3)', 'rgba(147,239,115,0.3)', 'rgba(255,255,0,0.3)', 'rgba(255,0,255,0.3)'];
	for (var i = 0; i < style.length; i++) {
		cav.beginPath();
		var rad = 2 * Math.PI / style.length;
		cav.moveTo(0, 0);
		cav.arc(0, 0, 60, i * rad, (i + 1) * rad, false);
		cav.fillStyle = style[i];
		cav.lineWidth = 5.0; //定义线宽
		cav.fill();
	}
}
