// JavaScript Document
var result=document.getElementById("result");
function readAsText()
{
	var namee=document.getElementById("namee");//用以存储文件名称
    var file = document.getElementById("file").files[0];//获取文件
	namee.value=file.name;//将文件名称赋值给namee
    var reader = new FileReader();
    //readAsText(文件,"文件的编码格式")
    reader.readAsText(file,"GB2312");
    reader.onload = function(f)
    {
        var result=document.getElementById("result");
        //在页面上显示读入文本
        result.innerHTML=this.result;
    }
}

