//javascript document
function Show(){
	var file;//返回FileList文件列表对象
	var file = document.getElementById("file").files[0];//检查是否为图像文件
    if(!/image\/\w+/.test(file.type))    {
        alert("请确保文件为图像类型");
        return false;
    }    
    var reader = new FileReader();
    reader.readAsDataURL(file);	//将文件以Data URL形式进行读入页面
    reader.onload = function(e)    {
       var result=document.getElementById("background");
        result.style.background='url('+this.result+')';	
    }
	
}



