// JavaScript Document
var cav=document.getElementById("cav").getContext("2d");
function upp(){
	cav.clearRect(0,0,800,500);
	var img=new Image();
	img.src="img/05.png";
	img.onload=function(){
		cav.drawImage(img,50,400,100,100);
	}
	cav.translate(0,-2);
}
function fly(){
	cav.clearRect(0,0,800,500);
	var img=new Image();
	img.src="img/05.png";
	img.onload=function(){
	cav.drawImage(img,50,400,100,100);
	}
	cav.translate(2,0);
}

