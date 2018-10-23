// JavaScript Document
function init() {
	var source = document.getElementById("dragme");
	var dest1 = document.getElementById("text1");
	// (1) 拖放开始
	source.addEventListener("dragstart", function (ev) {
		var dt = ev.dataTransfer;// 追加数据
		dt.effectAllowed = 'all';
		//(2) 拖动元素为dt.setData("text/plain", this.id); 
		dt.setData("text/plain", "哟吼，我进来了");
	}, false);
	// (3) drop:被拖放
	dest1.addEventListener("drop", function (ev) {
		var dt = ev.dataTransfer;// 从DataTransfer对象那里取得数据
		var text = dt.getData("text/plain");
		dest1.textContent += text;
	}, false);
	// (4) dragend：拖放结束
	source.addEventListener("dragend", function (ev) {
		source.style.position="absolute";
		source.style.top=event.clientY-75+'px';
		source.style.left=event.clientX-75+'px';
		ev.preventDefault();//不执行默认处理（拒绝被拖放）
	}, false);
}
//(5) 设置页面属性，不执行默认处理（拒绝被拖放）
document.ondragover = function (e) {
	e.preventDefault();
};
document.ondrop = function (e) {
	e.preventDefault();
}
