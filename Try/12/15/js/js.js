// JavaScript Document
var cav = document.getElementById("cav").getContext("2d");
cav.strokeStyle = "#f0f";
cav.font = "60px 华文新魏";
var hour = 0;
var min = 0;
var sec = 0;
var ms = 0;
function start(){
	ds=setInterval(h, 1);
}
function stop(){
	clearInterval(ds);
}
function clearr(){
	cav.clearRect(0, 0, 800, 600);
	cav.strokeText(0 + " : " + 0 + " : " + 0 + " : " + 0, 250, 250);
	cav.stroke();
}
function h() {
	tim = hour + " : " + min + " : " + sec + " : " + ms;
	cav.clearRect(0, 0, 800, 600);
	cav.strokeText(tim, 250, 250);
	cav.stroke();
	ms++;
	if (ms == 1000) {
		sec++;
		ms = 0;
		if (sec == 60) {
			min++;
			sec = 0;
			if (min == 60) {
				hour++;
				min = 0;
			}
		}
	}
}
