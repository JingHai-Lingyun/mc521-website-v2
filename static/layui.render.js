layui.use(function(){
    var layer = layui.layer;
    var util = layui.util;
    // 事件
    util.on('lay-on', {
        'banlist': function(){
            layer.tips('这里~', this, {
            tips: [1, '#16b777']
            });
        },
    })
})