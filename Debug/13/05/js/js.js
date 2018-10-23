// JavaScript Document
function init() {
	var pic=document.getElementById("pic");
	var top=parseInt(document.getElementById("top").value);
	var left=parseInt(document.getElementById("left").value);
	var img=new Image();
	img.src='img/face1.png'//拖放图标地址
	// (1) 拖放开始
	pic.addEventListener("dragstart", function (ev) {
		var dt = ev.dataTransfer; // 追加数据
		dt.effectAllowed = 'all';
		dt.setDragImage(img, top+'px', left+'px');//设置拖放图标
	}, false);
	// (2) drop:被拖放
	document.addEventListener("drop", function (ev) {
	var dt = ev.dataTransfer;// 追加数据
		dt.effectAllowed = 'all';
		
		pic.style.top=event.clientY-40+'px';//设置拖放效果
		pic.style.left=event.clientX-40+'px';
	}, false);
}
//(3) 设置页面属性，不执行默认处理（拒绝被拖放）
document.ondragover = function (e) {
	e.preventDefault();
};
document.ondrop = function (e) {
	e.preventDefault();
}
