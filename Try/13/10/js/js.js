// JavaScript Document
function init() {
	var pic = document.getElementById("pic");
	document.addEventListener("drop",function(ev){
	var dt = ev.dataTransfer;// 追加数据
		dt.effectAllowed = 'all';
		pic.style.top=event.clientY-40+'px';
		pic.style.left=event.clientX-40+'px';
})
//(5) 设置页面属性，不执行默认处理（拒绝被拖放）
document.ondragover = function (e) {
	e.preventDefault();
};
document.ondrop = function (e) {
	e.preventDefault();
}}
