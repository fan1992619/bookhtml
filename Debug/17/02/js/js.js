// JavaScript Document
var question=document.getElementById("question");
var answer=document.getElementById("answer");
var result=document.getElementById("resultA");
function save(){
	localStorage.setItem(question.value,answer.value);
}
function see(){
	alert(sessionStorage.getItem(question.value)); 
}
