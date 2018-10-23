// JavaScript Document
var cav=document.getElementById("cav").getContext("2d");
cav.fillStyle="#0f0";
cav.arc(400,300,100,0,Math.PI*2);//绘制头部
cav.stroke();//绘制轮廓
cav.arc(360,280,10,0,Math.PI*2);//左眼
cav.stroke();
cav.arc(440,280,10,0,Math.PI*2);//右眼
cav.stroke();
cav.arc(398,350,15,0,Math.PI,false);//嘴巴
cav.stroke();


