// JavaScript Document
function Show() {
	var temp;
	var file=document.getElementById("file");
	for(var i=0;i<file.files.length-1;i++){
		if(file.files[i].size>file.files[i+1].size){
			temp=file.files[i];
		}
		else{
			temp=file.files[i+1];
		}
	}
	alert("较大的图片为"+temp.name+"\n其大小为"+temp.size)
}