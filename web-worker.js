self.addEventListener('message', (ev) => {
    console.log(ev.data);
   var resMsg = HTTPreq();
    self.postMessage('received ' +resMsg)
})

function HTTPreq() {
    var params = JSON.stringify({
               first: 0,
               second: 1,
               third: 2
           });
        var url = "https://qcvault.herokuapp.com/unlock_safe";
        var xmlHttp = new XMLHttpRequest();
         xmlHttp.open('POST', url, false);
         xmlHttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
         xmlHttp.send(params)
       var resData = xmlHttp.responseText;
       console.log(resData);
       return resData;
} 

