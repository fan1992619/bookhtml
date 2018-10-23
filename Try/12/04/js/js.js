// JavaScript Document
var cav=document.getElementById("cav").getContext("2d");
cav.lineWidth=10;
cav.lineJoin="round";
cav.strokeStyle="#0f0";
cav.fillStyle="#fff";

cav.beginPath();//公交车轮廓
cav.moveTo(79,116);
cav.lineTo(40,207);
cav.lineTo(40,307);
cav.lineTo(392,306);
cav.lineTo(392,116);
cav.closePath();
cav.stroke();
//车轮
cav.beginPath();//车身前护轮
cav.lineWidth=20;
cav.arc(124,312,37,0,Math.PI,true);

cav.stroke();
cav.fill();

cav.beginPath();//车身后护轮
cav.arc(304,312,37,0,Math.PI,true);
cav.stroke();
cav.fill();

cav.beginPath();//车前轮
cav.lineWidth=10;
cav.arc(124,312,25,0,Math.PI*2,true);
cav.stroke();
cav.fill();

cav.beginPath();//车后轮
cav.arc(304,312,25,0,Math.PI*2,true);
cav.stroke();
cav.fill();

cav.beginPath();//公交车车窗下的线
cav.lineWidth=4;
cav.moveTo(42,204);
cav.lineTo(387,204);
cav.stroke();

cav.beginPath();//公交车车窗一
cav.moveTo(87,130);
cav.lineTo(60,193);
cav.lineTo(102,193);
cav.lineTo(102,130);
cav.closePath();
cav.stroke();

for(var i=113;i<350;i+=55){
	cav.beginPath();//公交车车窗二至车窗五
cav.lineWidth=4;
cav.strokeRect(i,130,40,63);
cav.stroke();
}
//车上十字
cav.beginPath();//十字的横
cav.rect(98,223,35,10);
cav.fill();
cav.stroke();

cav.beginPath();//十字的竖
cav.rect(110,211,10,35);
cav.fill();
cav.stroke();

cav.beginPath();//消除十字中间内容
cav.fillRect(100,225,30,7);
cav.fill();
//车前灯
cav.beginPath();
cav.arc(37,222,15,Math.PI/2,3*Math.PI/2,false);
cav.closePath();
cav.stroke();















