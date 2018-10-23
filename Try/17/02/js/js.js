// JavaScript Document
var name1 = document.getElementById("name");
var academy = document.getElementById("academy");
var clas = document.getElementById("clas");
var num = document.getElementById("num");
var room = document.getElementById("room");
var dat = document.getElementById("dat");
var tel = document.getElementById("tel");
var emal = document.getElementById("emal");
var result = document.getElementById("search-num");

function ok() {
	var a = [name1.value, academy.value, clas.value, num.value, room.value, dat.value, tel.value, emal.value];
	alert(a);
	localStorage.setItem(num.value, a);
}

function see() {
	if (result.value == "") {
		alert("请输入学号");
	} else {
		document.getElementById("show").style.display="block";
		var cc = localStorage.getItem(result.value);
		var arry = cc.split(",");
		var td = document.getElementById("show").getElementsByTagName("tr")[1].getElementsByTagName("td");
		for (var i = 0; i < td.length; i++) {
			td[i].innerHTML = arry[i];
		}
	}
}
