// JavaScript Document
var result = document.getElementById("result");
function readAsText() {
	var file = document.getElementById("file").files[0]; //获取文件
	var reader = new FileReader();
	var type1 = file.type;
	if (/image\/\w+/.test(type1)) {
		if (confirm('确定打开该图片吗')) {
			var reader = new FileReader();
			reader.readAsDataURL(file); //将文件以Data URL形式进行读入页面
			reader.onload = function (e) {
				var result = document.getElementById("result");
				result.innerHTML = '<img src="' + this.result + '" alt=""/>' //在页面上显示文件
			}
		}
	} else if (/text\/\w+/.test(type1)) {
		if (confirm("确定查看该文件？")) {
			reader.readAsText(file,"GB2312");
			reader.onload = function () {
				var result=document.getElementById("text");
				text.style.display="block";
        //在页面上显示读入文本
        text.innerHTML=this.result;
			}
		}
	}  else {
		alert("无法识别该文件")
	}
}
