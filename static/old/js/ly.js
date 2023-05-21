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

xhr.open('GET','https://mcapi.us/server/status?ip=mc521.cc&port=25565',true);
xhr.send()