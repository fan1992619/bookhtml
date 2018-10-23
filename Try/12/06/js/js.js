// JavaScript Document
var cav=document.getElementById("cav").getContext("2d");
cav.strokeStyle="#363e4f";
cav.fillStyle="#2dacfa";
cav.lineWidth=10;
cav.beginPath();
cav.moveTo(50,117);
cav.bezierCurveTo(60,20,179,20,190,117);//head
cav.bezierCurveTo(203,130,211,157,202,170);//right-hand
cav.quadraticCurveTo(192,166,188,157);//right-hand-bottom
cav.quadraticCurveTo(186,170,176,179);//right-stomok
cav.quadraticCurveTo(192,187,192,198);//right-foot
cav.bezierCurveTo(171,221,140,212,128,204);//right-foot-bpttom
cav.lineTo(112,204);
cav.bezierCurveTo(100,212,69,221,48,198);//left-foot-bpttom
cav.quadraticCurveTo(48,187,64,179);//left-foot
cav.quadraticCurveTo(54,170,52,157);//left-stomok
cav.quadraticCurveTo(48,166,38,170);//left-hand-bottom
cav.bezierCurveTo(29,157,37,130,50,117);//right-hand
cav.stroke();
cav.fill();






