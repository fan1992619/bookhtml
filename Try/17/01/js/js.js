// JavaScript Document
setInterval(dat, 1000);
//dat()
function dat() {
	var date1 = new Date();
	var yy = date1.getFullYear();
	var mm = date1.getMonth() + 1;
	var dd = date1.getDate();
	var wk = date1.getDay();
	var hh = date1.getHours();
	var min = (date1.getMinutes() < 10) ? "0" + date1.getMinutes() : date1.getMinutes();
	var ss = (date1.getSeconds() < 10) ? "0" + date1.getSeconds() : date1.getSeconds();
	var day1 = " 星期"
	switch (wk) {
		case 1:
			day1 += "一";
			break;
		case 2:
			day1 += "二";
			break;
		case 3:
			day1 += "三";
			break;
		case 4:
			day1 += "四";
			break;
		case 5:
			day1 += "五";
			break;
		case 6:
			day1 += "六";
			break;
		case 7:
			day1 += "日";
			break;
	}

	var tt = yy + "年" + mm + "月" + dd + "日" + day1 + " " + hh + ":" + min + ":" + ss;
	document.getElementById("dat").innerHTML = tt;
}


var idd = document.getElementById("idd");
var cnt = document.getElementById("cnt");

function ok() {
	localStorage.setItem(idd.value, cnt.value);
}

function see() {
	if (idd.value == "") {
		alert("请输入日记标题");
	} else {
		document.getElementById("saw").style.display = "block";
		document.getElementById("saw").innerHTML = localStorage.getItem(idd.value);
	}
}
