
function deal(){
if(form1.str.value=="")
{alert("请输入要格式化的数字！");form1.str.focus();return false;}
if(isNaN(form1.str.value)){
	alert("您输入的数字不正确!");form1.str.focus();return false;
}
if(form1.le.value=="")
{alert("请输入格式化后的长度！");form1.le.focus();return false;}
if(isNaN(form1.le.value)){
	alert("您输入的格式化的长度不正确!");form1.le.focus();return false;
}
form1.lastStr.value=formatNO(form1.str.value,form1.le.value);
}
function formatNO(str,len){
	var strLen=str.length;
	for(i=0;i<len-strLen;i++){
		str="0"+str;
	}
	return str;
}
