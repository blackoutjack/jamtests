
JAM.startProfile('load');
var exp='xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=onmousemove2", true);xmlhttp.send(null);',v0=document.getElementById("test"),v1=JAMScript.call(Function,null,[exp]);v0.addEventListener("mousemove",v1,!1);

JAM.stopProfile('load');
