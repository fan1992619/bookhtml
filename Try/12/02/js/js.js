// JavaScript Document
var cav=document.getElementById("cav").getContext("2d");
setInterval(move,100);
var i=0;
function move(){
	cav.clearRect(0,0,800,600);
	cav.fillStyle="#f00";
	cav.fillRect(i,50,50,50);
i+=10;
}
