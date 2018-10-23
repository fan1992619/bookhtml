// JavaScript Document
var cav = document.getElementById("cav").getContext("2d");
function sum() {
	var num1 = document.getElementById("num1").value;
	var num2 = document.getElementById("num2").value;
	var test1 = /^\d{1,9}$/;
	if ((test1.test(num1)) && (test1.test(num2))) {
		sum1 = parseInt(num1);
		sum2 = parseInt(num2);
		var sum = sum1 + sum2;
		var re = sum1 + " + " + sum2 + " = " + sum;
		drew(re)
	} else {
		alert("请正确输入数字")
	}
}
function drew(re) {
	cav.clearRect(0, 0, 800, 600);
	cav.font = "40px 宋体";
	cav.fillStyle = "#f0f";
	cav.textAlign = "center";
	cav.textBaseline = "middle";
	cav.fillText(re, 400, 300);
	cav.fill();
}
