// JavaScript Document
var cav = document.getElementById("cav").getContext("2d");
var align1 = document.getElementById("textAlign");
var align2 = document.getElementById("textBaseline");
function show1() {
	cav.clearRect(0, 0, 800, 600);
	cav.fillStyle = "#f00";
	cav.font = "40px 宋体";
	cav.textAlign = align1.value;
	cav.textBaseline = align2.value;
	cav.fillText("在下方选择对齐方式已改变对齐方式", 400, 50);
	cav.fill();
}
