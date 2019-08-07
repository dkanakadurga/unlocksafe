

    self.onmessage = function (e) {
        var param = e.data;
        var url="https://qcvault.herokuapp.com/unlock_safe";
        var data=getSpecData(param.detailLvl,param.startWeek,param.endWeek,param.mkt,url)
        self.postMessage(data);
    }; 
    function getSpecData(detailLvl, startWeek, endWeek, mkt, url) {
       var xmlHttp = new XMLHttpRequest();
       var params = JSON.stringify({
           first: 0,
           second: 1,
           third: 2
       });
       
       xmlHttp.open('POST', url, false);
       xmlHttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xmlHttp.send(params)


    }
