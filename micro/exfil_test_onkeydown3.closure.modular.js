introspect(JAMScript.introspectors.processAll) {
var exp = 'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=onkeydown3", true);xmlhttp.send(null);';
document.getElementById("test").onkeydown = Function(exp);

}
