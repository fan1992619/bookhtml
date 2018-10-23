// JavaScript Document
var cav = document.getElementById("cav").getContext("2d");
function datee() {//获取时间
	var date1 = new Date();
	var year1 = date1.getFullYear();
	var month1 = date1.getMonth() + 1;
	var dat1 = date1.getUTCDate();
	var hour1 = date1.getHours();
	var min = date1.getMinutes();
	var sec = date1.getSeconds();
	var day1 = date1.getDay();
	var dayy = "";
	if ((min < 9) && (min = 9)) {
		min = "0" + min;
	}
	if ((sec < 9) && (sec = 9)) {
		sec = "0" + sec;
	}
	switch (day1) {
		case 0:	dayy = "星期天";	break;
		case 1:	dayy = "星期一";	break;
		case 2:	dayy = "星期二";	break;
		case 3:	dayy = "星期三";	break;
		case 4:	dayy = "星期四";	break;
		case 5:	dayy = "星期五";	break;
		case 6:	dayy = "星期六";	break;
		default:alert("请刷新页面");	break;
	}
	var txt1 = year1 + " 年 " + month1 + " 月" + dat1 + " 日 ";
	var txt2 = hour1 + " : " + min + " : " + sec + " " + dayy;
	drew(txt1, txt2)
}
function drew(txt1, txt2) {
	cav.strokeStyle = "#f0f";
	cav.font = "40px 华文中魏";
	cav.clearRect(0, 0, 800, 600);
	cav.strokeText(txt1,250, 200);
	cav.stroke();
	cav.strokeText(txt2, 230, 350);
	cav.stroke();
}
