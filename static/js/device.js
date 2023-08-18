// 检测是否为移动设备
function isMobileDevice() {return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);}
// 如果是移动设备，重定向到device.html页面
if (isMobileDevice()) {window.location.href = 'device.html';}