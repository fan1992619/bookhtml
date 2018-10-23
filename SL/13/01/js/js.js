// JavaScript Document
function sure()
{
    var file;
	//返回FileList文件列表对象
    for(var i=0;i<document.getElementById("file").files.length;i++)
	{
        file = document.getElementById("file").files[i];//file对象为用户选择的单个文件
        if (confirm("确定上传图片 " + file.name + " 作为头像？")) { //弹出文件名
			alert("已上传");
		} 
		else {
			alert("已取消上传");
		}											
    }
}
