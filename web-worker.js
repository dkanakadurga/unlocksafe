self.addEventListener('message', (ev) => {
    // console.log(ev.data);
   var resMsg = HTTPreq(ev.data);
   if(resMsg !== "Wrong code") {
     console.log(resMsg);
    self.postMessage('received ' +resMsg)
   }
})

function HTTPreq(obj) {
    var params = JSON.stringify(obj);
        var url = "https://qcvault.herokuapp.com/unlock_safe";
        var xmlHttp = new XMLHttpRequest();
         xmlHttp.open('POST', url, false);
         xmlHttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
         xmlHttp.send(params)
       var resData = xmlHttp.responseText;
    

       return resData;
} 

