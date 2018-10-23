// JavaScript Document
function ok(pic){//形式参数
	var pic1=document.getElementById(pic);//通过ID获取图片
		pic1.offsetTop.top=event.clientY+'px';//绝对定位，图片的距离上方的像素等于鼠标位置的Y坐标
		pic1.offsetLeft.left=event.clientX+'px';
}
//设置页面属性，不执行默认处理（拒绝被拖放）
document.ondragover = function (e) {
	e.preventDefault();
};
document.ondrop = function (e) {
	e.preventDefault();
}
