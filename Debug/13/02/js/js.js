// JavaScript Document
var result = document.getElementById("result");
function readAsText() {
	var file = document.getElementById("file").files[0]; //获取文件
	var reader = new FileReader();
	var type1 = file.type;
	if (/image\/\w+/.test(type1)) {
			var reader = new FileReader();
			reader.readAsText(file); //将文件以Data URL形式进行读入页面
			reader.onload = function (e) {
				var result = document.getElementById("result");
				result.innerHTML = this.result //在页面上显示图片
			}
	} else if (/text\/\w+/.test(type1)) {
			reader.readAsText(file);
			reader.onload = function () {
				result.innerHTML = this.result;//在页面上显示文件内容
			}
	}  else {
		alert("无法识别该文件")
	}
}
