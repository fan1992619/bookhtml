self.addEventListener("message", function(event) {
	var data = JSON.parse(event.data);
	var returnArray = new Array();
	var temp;
	for(var index = 0; index < data.length; index++) {
		if((temp = data[index]) % 3 == 0) {
			returnArray.push(temp);
		}
	}
	self.postMessage(JSON.stringify(returnArray));
        self.close();  // 关闭子线程。
}, false);