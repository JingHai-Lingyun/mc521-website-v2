layui.use(function(){
    var layer = layui.layer;
    var util = layui.util;
	var elem = document.getElementById('here')
    // 事件
    util.on('lay-on', {
        'banlist': function(){
            layer.tips('这里~', elem, {
            tips: [1, '#16b777']
            });
        },
    })
})