// JavaScript Document
function Show() {
	var file = document.getElementById("file");
	var num=parseInt(document.getElementById("num").value);
		if(num<file.files.length+1){
			alert(file.files[num-1].name)
		}
	else{
		alert("请重新输入")
	}
}
