const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const response = xhr.responseText;
        const pattern = /"now":(\d+)(?:,|$)/;
        const result = response.match(pattern);
        if (result[1]>0) {
            console.log('Result->'+result[1])
                document.getElementById("count1").innerText = result[1];
        } else {
            console.log('失败：Result->'+result[1])
        }
    }
};

$.ajax({
    url: 'https://gitee.com/JingHai-Lab/mc521-website-v2/raw/master/countnumber.txt',
    type: 'GET',
    success: function(response) {
        const { serverjars, clientmods } = response;
        $('#count2').text(serverjars);
        $('#count3').text(clientmods);
        console.log(serverjars, clientmods);
    },
    error: function(xhr, status, error) {
        console.log('XHR 加载失败：', error);
    }
});

xhr.open('GET','https://mcapi.us/server/status?ip=mc521.cc&port=25565',true);
xhr.send()