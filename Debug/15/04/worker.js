// worker.js
//   calculate pi using numerical integration
// 2011-11, cheungmine
self.onmessage = function (event) {
  // numerical integration to calc pi
  var num_rects = event.data;
  var width = 1.0/num_rects;
  var mid;
  var height;
  var sum = 0.0;
  var area;
  for (var i=0; i<num_rects; i++) {
	mid = (i+0.5) * width;
	height = 4.0/(1.0+mid*mid);
	sum += height;
  }
  area = width*sum; // area=pi

  // post message back to UI thread
  self.postMessage(area);
};
