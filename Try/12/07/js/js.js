// JavaScript Document
var cav=document.getElementById("cav").getContext("2d");
cav.lineWidth=5;
cav.strokeStyle="#f00";
for(var i=0;i<11;i++){
	cav.beginPath();
	cav.arc(400,300,i*30,0,Math.PI*2);
	cav.stroke();
}
