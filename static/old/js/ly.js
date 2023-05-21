const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const response = xhr.responseText;
        const pattern = /"now":(\d+)(?:,|$)/;
        const result = response.match(pattern);
        if (result[1]>0) {
            console.log('Result->'+result[1])
                document.getElementById("count").dataset.number = result[1];
        } else {
            console.log("失败");
            console.log('Result->'+result[1])
                document.getElementById("count").dataset.number = "failed";
        }
    }
};

xhr.open('GET','https://mcapi.us/server/status?ip=mc.byboy.top&port=25565',true);
xhr.send()