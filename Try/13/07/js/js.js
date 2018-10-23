// JavaScript Document
var result=document.getElementById("result");
function readAsText()
{
    var file = document.getElementById("file").files[0];//获取文件
    var reader = new FileReader();
    //readAsText(文件,"文件的编码格式")
    reader.readAsText(file,"GB2312");
    reader.onload = function()
    {
        var result=document.getElementById("result");
        //在页面上显示读入文本
        result.innerHTML=this.result;
    }
}

