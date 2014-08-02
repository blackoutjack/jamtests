
JAM.startProfile('load');
var exp='xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=onmousemove1", true);xmlhttp.send(null);',v0=document.getElementById("test");JAM.call(v0.setAttribute,v0,["onmousemove",exp]);

JAM.stopProfile('load');
