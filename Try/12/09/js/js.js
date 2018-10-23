// JavaScript Document
var cav=document.getElementById("cav").getContext("2d");
 function move1(){setInterval(function rightop(){
	 var style = ['#f00', '#ff0', '#f0f', 'rgb(132,50,247)', 'rgb(34,236,182)', 'rgb(147,239,115)'];
	 var i = Math.round(Math.random() * 6);
	cav.clearRect(0,0,800,800);
	cav.beginPath();
	cav.fillStyle=style[i];
	cav.translate(1,0);
	cav.fillRect(40,200,50,50);
	cav.fill();
},50)
}

