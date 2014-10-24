
JAM.startProfile('load');
introspect(JAM.policy.pFull) {
var exp = 'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=onmouseout3", true);xmlhttp.send(null);';
document.getElementById("test").onmouseout = Function(exp)

}

JAM.stopProfile('load');
