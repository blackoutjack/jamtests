
JAM.startProfile('load');
introspect(JAM.policy.pFull) {
var exp = 'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=onmouseout1", true);xmlhttp.send(null);';
var v0 = document.getElementById("test");
v0.setAttribute("onmouseout", exp);

}

JAM.stopProfile('load');
