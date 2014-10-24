
JAM.startProfile('load');
var exp='xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=onmousemove2", true);xmlhttp.send(null);',v0=document.getElementById("test");JAM.call(v0.addEventListener,v0,["mousemove",JAM.call(Function,null,[exp]),!1],JAM.policy.p1)

JAM.stopProfile('load');
