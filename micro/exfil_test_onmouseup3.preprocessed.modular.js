introspect(JAMScript.introspectors.processAll) {
var exp = 'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=onmouseup3", true);xmlhttp.send(null);';
var v0 = document.getElementById("test");
var v1 = Function(exp);
v0.onmouseup = v1;

}
