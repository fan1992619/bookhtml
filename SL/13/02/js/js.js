// JavaScript Document
function Show() {
	var file = document.getElementById("file").files[0];
	//判断并显示图片大小和格式
	if ((file.size > 22250) ||(!/image\/\w+/.test(file.type))) {
		alert("当前文件大小为" + file.size + '\n'+"当前文件格式为" + file.type + "请重新选择文件")
	} else {
		alert("当前文件长度为" + file.size + '\n'+"类型为" + file.type + "符合上传条件")
	}
}
