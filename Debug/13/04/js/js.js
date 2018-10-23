// JavaScript Document
// JavaScript Document
function init() {
	var dragcont = document.getElementById("dragcont");
	var box = document.getElementById("box");
			dragcont.addEventListener("dragstart", function (ev) {
		var dt = ev.dataTransfer; // 追加数据
		dt.effectAllowed = 'all';
				dragcont.innerHTML="正在移动";//设置提示文字
		//(2) 拖动元素为dt.setData("text/plain", this.id); 
		dragcont.setData("text/plain", "它进来了");
	}, false);
	
	box.addEventListener("drop",function(ev){
	var dt = ev.dataTransfer;// 追加数据
		dt.effectAllowed = 'all';
		var text = dt.getData("text/plain");
		box.textContent += text;
		dragcont.innerHTML="请移动我";//设置提示文字
		dragcont.style.top=event.clientY-40+'px';
		dragcont.style.left=event.clientX-40+'px';
})
	document.addEventListener("drop",function(ev){
	var dt = ev.dataTransfer;// 追加数据
		dt.effectAllowed = 'all';
		dragcont.innerHTML="请移动我";//设置提示文字

})
//(5) 设置页面属性，不执行默认处理（拒绝被拖放）
document.ondragover = function (e) {
	e.preventDefault();
};
document.ondrop = function (e) {
	e.preventDefault();
}
}