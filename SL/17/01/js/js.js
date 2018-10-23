// JavaScript Document
function getE(ele){   //自定义一个getE()函数
                return document.getElementById(ele);   //返回并调用document对象的getElementById方法输出变量
            }   
            var text_1 = getE('text-1'),   //声明变量并为其赋值
                mag = getE('msg_1'),   
                btn_1 = getE('btn-1'),   
                btn_2 = getE('btn-2'),   
                btn_3 = getE('btn-3'),   
                btn_4 = getE('btn-4');   
            btn_1.onclick = saveSessionStorage;   
            btn_2.onclick = loadSessionStorage;   
            btn_3.onclick = saveLocalStorage;   
            btn_4.onclick = loadLocalStorage;   
               
            function saveSessionStorage(){   
                sessionStorage.setItem('msg',text_1.value + ' session');
            }   
            function loadSessionStorage(){   
                mag.innerHTML = sessionStorage.getItem('msg');   
            }   
            function saveLocalStorage(){   
                localStorage.setItem('msg',text_1.value + ' local');
            }   
            function loadLocalStorage(){   
                mag.innerHTML = localStorage.getItem('msg');   
            }   
            //记录页面次数   
            var local_count = localStorage.getItem('a_count')?localStorage.getItem('a_count'):0;   
            getE('local_count').innerHTML = local_count;   
            localStorage.setItem('a_count',+local_count+1);   
           
		    var session_count = sessionStorage.getItem('a_count')?sessionStorage.getItem('a_count'):0;   
            getE('session_count').innerHTML = session_count;   
            sessionStorage.setItem('a_count',+session_count+1);   