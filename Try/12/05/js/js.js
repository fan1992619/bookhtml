// JavaScript Document
var cav=document.getElementById("cav").getContext("2d");
cav.lineWidth=5;
cav.strokeStyle="#f00";
cav.moveTo(400,300);
cav.bezierCurveTo(450,360,500,280,600,200);
cav.stroke();