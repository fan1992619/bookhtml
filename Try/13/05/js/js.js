//javascript document
function Show(){
	var file;//返回FileList文件列表对象
	var temp=" ";
	for(var i=0;i<document.getElementById("file").files.length;i++){
		var file = document.getElementById("file").files[i];//检查是否为图像文件
    if(!/image\/\w+/.test(file.type))    {
        alert("请确保文件为图像类型");
        return false;
    }    
    var reader = new FileReader();
    reader.readAsDataURL(file);	//将文件以Data URL形式进行读入页面
    reader.onload = function(e)    {
       var result=document.getElementById("result");
        result.innerHTML+= "&nbsp"+'<img src="'+this.result+'" alt=""/>'		//在页面上显示文件
    }
	}
}



