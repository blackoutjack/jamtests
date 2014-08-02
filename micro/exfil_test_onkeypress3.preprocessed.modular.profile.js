
JAM.startProfile('load');
introspect(JAM.policy.pFull) {
var exp = 'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=onkeypress3", true);xmlhttp.send(null);';
var v0 = document.getElementById("test");
var v1 = Function(exp);
v0.onkeypress = v1;

}

JAM.stopProfile('load');
