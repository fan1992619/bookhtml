// JavaScript Document
var cav=document.getElementById("cav").getContext("2d");
var img=new Image();
	img.src="img/pic1.png";
	img.onload=function(){
		cav.drawImage(img,-75,-75,150,150);
	};
cav.translate(200,60);
function go(){
	cav.clearRect(-75,-75,150,150);
	cav.rotate(-1/(Math.PI*2));
	var img=new Image();
	img.src="img/pic1.png";
	img.onload=function(){
		cav.drawImage(img,-75,-75,150,150);
	}
}