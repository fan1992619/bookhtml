// JavaScript Document
function setOk(){
	var file = document.getElementById("file").files[0]; //获取文件
	var reader = new FileReader();
	var type1 = file.type;
	if (/image\/\w+/.test(type1)) {
			var reader = new FileReader();
			reader.readAsDataURL(file); //将文件以Data URL形式进行读入页面
			reader.onload = function (e) {
				var addr=this.result;
				init(addr)
		}
}
function init(addr) {
	var pic=document.getElementById("pic");
	var img=new Image();
	img.src=addr;
	// (1) 拖放开始
	pic.addEventListener("dragstart", function (ev) {
		var dt = ev.dataTransfer; // 追加数据
		dt.effectAllowed = 'all';
		dt.setDragImage(img, 20, 20);
	}, false);
	// (2) drop:被拖放
	document.addEventListener("drop", function (ev) {
	var dt = ev.dataTransfer;// 追加数据
		dt.effectAllowed = 'all';
		pic.style.top=event.clientY-20+'px';
		pic.style.left=event.clientX-20+'px';
	}, false);
}
//(3) 设置页面属性，不执行默认处理（拒绝被拖放）
document.ondragover = function (e) {
	e.preventDefault();
};
document.ondrop = function (e) {
	e.preventDefault();
}
}