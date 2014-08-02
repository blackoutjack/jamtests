
JAM.startProfile('load');
var exp='xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=onkeydown3", true);xmlhttp.send(null);',v0=document.getElementById("test"),v1=JAM.call(Function,null,[exp]);JAM.set(v0,"onkeydown",v1);

JAM.stopProfile('load');
