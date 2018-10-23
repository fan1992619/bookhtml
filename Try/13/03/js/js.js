// JavaScript Document
function sure()
{
    var file;//返回FileList文件列表对象
	var tr=document.getElementById("tab").getElementsByTagName("tr");
    for(var i=0;i<document.getElementById("file").files.length;i++)//file对象为用户选择的单个文件
	{
		var td1=document.createElement("td");
		tr[0].appendChild(td1);
		td1.innerHTML="第"+(i+1)+"个";//提示所选的文件序号
		
        var file = document.getElementById("file").files[i];
		var td2=document.createElement("td");
		tr[1].appendChild(td2);
		td2.innerHTML=file.name;//文件名
		
		var td3=document.createElement("td");
		tr[2].appendChild(td3);
		td3.innerHTML=file.type;//文件类型
		
		var td4=document.createElement("td");
		tr[3].appendChild(td4);
		td4.innerHTML=file.size;//文件大小
    }
}