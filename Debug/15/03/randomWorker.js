self.addEventListener("message", function(event) {
	var intArray = new Array(100);
	for(var index = 0; index < intArray.length; index++) {
		intArray[index] = parseInt(Math.random() * 100);
	}
	var worker = new Worker("sumWorker.js");
	// 把随机数组传递给子线程进行挑选工作。
	worker.postMessage(JSON.stringify(intArray));
	worker.addEventListener("message", function(event1) {
		self.postMessage(event1.data);  // 把挑选结果返回主页面。
	}, false);
}, false);