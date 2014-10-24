
JAM.startProfile('load');
var exp = 'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=onkeypress1", true);xmlhttp.send(null);';
var v0 = document.getElementById("test");
v0.setAttribute("onkeypress", exp)

JAM.stopProfile('load');
