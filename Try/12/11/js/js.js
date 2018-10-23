// JavaScript Document
var cav=document.getElementById("cav").getContext("2d");
cav.translate(400,300);
function fat(){
	cav.clearRect(-70,-80,140,160);
	cav.scale(1.02,1);
	var img =new Image();
	img.src="img/monkey.png";
	img.onload=function(){
		cav.drawImage(img,-70,-80,140,160);
	}
}
function topp(){
	cav.clearRect(-70,-80,140,160);
	cav.scale(1,1.05);
	var img =new Image();
	img.src="img/monkey.png";
	img.onload=function(){
		cav.drawImage(img,-70,-80,140,160);
	}
}
