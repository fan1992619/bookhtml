// JavaScript Document
function getE(ele) { //自定义一个getE()函数
	return document.getElementById(ele); //返回并调用document对象的getElementById方法输出变量
}
var local_count = localStorage.getItem('a_count') ? localStorage.getItem('a_count') : 0;
getE('local_count').innerHTML = local_count;
sessionStorage.setItem('a_count', +local_count + 1);

var session_count = sessionStorage.getItem('a_count') ? sessionStorage.getItem('a_count') : 0;
getE('session_count').innerHTML = session_count;
localStorage.setItem('a_count', +session_count + 1);
