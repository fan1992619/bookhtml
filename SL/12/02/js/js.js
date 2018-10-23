// JavaScript Document
var ctx = document.getElementById("cav");
var cav = ctx.getContext("2d");
//x,y为五角星最左边定点坐标，n为五角星的缩小倍数，c为五角星的填充颜色
function draw(x, y, n, c) {
    cav.beginPath();
    cav.fillStyle = c;
    cav.moveTo(x / n, y / n);//moveTo方法绘制起点(x/n,y/n)
    //lineTo方法绘制从上一个顶点到((x+50)/n,y/n)顶点的路径
    cav.lineTo((x + 50) / n, y / n);
    cav.lineTo((x + 10) / n, (y + 30) / n);
    cav.lineTo((x + 25) / n, (y - 20) / n);
    cav.lineTo((x + 40) / n, (y + 30) / n);
    cav.closePath();//将终点与起点连接已形成闭合路径
    cav.fill();//绘制填充图形
}
function hug() {
    draw(160, 86, 0.7, '#ff0'); //第一棵树的树顶大五角星
    draw(487, 86, 0.7, '#ff0'); //第二棵树的树顶大五角星
    draw(357, 286, 1.3, '#0ff'); //第一棵树的其它小的五角星
    draw(320, 386, 1.5, '#f0f');
    draw(600, 566, 2.0, '#eca9f2');
    draw(500, 666, 2.0, '#eca9f2');
    draw(1050, 286, 1.5, '#e0f084'); //第二棵树挂的小五角星
    draw(1500, 486, 2.0, '#fe6869');
    draw(1700, 686, 2.5, '#88c7ef');
    draw(2550, 1000, 3.5, '#fff589');
    draw(1150, 450, 1.5, '#ebcd97');
    draw(2490, 1250, 3.5, '#f5d1ff');
}
function show() {//点击按钮隐藏或显示五角星
    //如果canvas状态为显示，则将其隐藏。反之，则让其显示
    if (ctx.style.display == "block") {
        ctx.style.display = "none";
    }
    else {
        ctx.style.display = "block";
		hug();
    }
}
cav.closePath()
