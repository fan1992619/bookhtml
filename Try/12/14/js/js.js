// JavaScript Document
var cav=document.getElementById("cav").getContext("2d");
setInterval(go,10);
cav.translate(300,300);
var style = ['#f00', '#ff0', '#f0f', 'rgb(132,50,247)', 'rgb(34,236,182)', 'rgb(147,239,115)'];
for(var i=0;i<250;i+=50){
	cav.fillStyle=style[i/50];
	cav.beginPath();
	cav.arc(i,i,20,0,Math.PI*2);
	cav.fill();	
}
function go(){
	cav.clearRect(0,0,600,600);
	cav.rotate(1/(Math.PI*30));
	cav.fillStyle=style[0];
	cav.beginPath();
	cav.arc(200,200,20,0,Math.PI*2);
	cav.fill();
	cav.fillStyle=style[1];
	cav.beginPath();
	cav.arc(150,150,20,0,Math.PI*2);
	cav.fill();
	cav.fillStyle=style[2];
	cav.beginPath();
	cav.arc(100,100,20,0,Math.PI*2);
	cav.fill();
	cav.beginPath();
	cav.fillStyle=style[3];
	cav.arc(50,50,20,0,Math.PI*2);
	cav.fill();
	cav.fillStyle=style[4];
	cav.beginPath();
	cav.arc(0,0,20,0,Math.PI*2);
	cav.fill();
}

