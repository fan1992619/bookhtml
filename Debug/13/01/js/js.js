// JavaScript Document
function readAsText() {
	var file = document.getElementById("file"); //获取文件
	var reader = new FileReader();
	document.getElementById("name").innerHTML = file.name;
	document.getElementById("type").innerHTML = file.type;
}
