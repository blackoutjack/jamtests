
JAM.startProfile('load');
var exp = 'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=onfocus2", true);xmlhttp.send(null);';
var v0 = document.getElementById("test");
var v1 = JAMScript.call(Function, null, [exp]);
v0.addEventListener("focus", v1, false);

JAM.stopProfile('load');
