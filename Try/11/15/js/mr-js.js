// JavaScript Document
function showPic(i){
	var dpics=document.getElementById('mr-pic'+i);
	dpics.style.display='block';
	
	}
function hidPic(i){
	var dpics=document.getElementById('mr-pic'+i);
	dpics.style.display='none';
	}
function bordr(c){
	var bord=document.getElementsByClassName('mr-messtxt2')[c];
	bord.style.border="1px dashed #f00"
	}
function clearBordr(c){
	var bord=document.getElementsByClassName('mr-messtxt2')[c];
	bord.style.border="none"
	}
function sel(){
	var checkboxs=document.getElementsByTagName('input');
	for(var i=0;i<checkboxs.length;i++)
	{if(checkboxs[i].type=='checkbox')
	{checkboxs[i].checked=document.getElementsByName('a')[0].checked}
	}
	}
function comp(z){
	var price=[1199.00,1580.00,3578.00];
	var num=document.getElementById('num'+z).value;
	var mone=document.getElementById('all'+z);
	mone.innerHTML=price[z]*num;
	}
function amoney(){
	var anum=0;
	var aprice=0;
	for(var i=0;i<3;i++)
	{
		var num=parseInt(document.getElementById('num'+i).value);
		var price=parseInt(document.getElementById('all'+i).innerHTML);
		anum+=num;
		aprice+=price;
		}
		document.getElementById('allnum').innerHTML=anum;		
		document.getElementById('allprice').innerHTML=aprice;
	}
	