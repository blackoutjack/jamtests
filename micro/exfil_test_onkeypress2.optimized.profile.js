
JAM.startProfile('load');
var exp='xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=onkeypress2", true);xmlhttp.send(null);',v0=document.getElementById("test"),v1=JAMScript.call(Function,null,[exp]);v0.addEventListener("keypress",v1,!1);

JAM.stopProfile('load');
