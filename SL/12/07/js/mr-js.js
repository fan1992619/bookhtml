// JavaScript Document
window.onload = function showpic() {
		var cav = document.getElementById('cav').getContext('2d');
		var pic = document.getElementById('pic');//获取HTML页面中的图形
		for (var i = 0; i < 5; i++) {
			cav.beginPath();
			cav.translate(890, -155);//平移画布
			cav.rotate(2 * Math.PI / 5); //将手机旋转2*Math.PI弧度
			cav.drawImage(pic, 450, 350, 88, 150);//绘制图形
		}
	}

