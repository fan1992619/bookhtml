// JavaScript Document
var json = {
	姓名: "陶国荣",
    性别: "男",
    邮箱: "tao_guo_rong@163.com"
};
self.onmessage = function(event) {
    self.postMessage(json);
    close();
}