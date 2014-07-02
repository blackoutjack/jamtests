
JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll) {
var exp = 'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=onmouseover1", true);xmlhttp.send(null);';
var v0 = document.getElementById("test");
v0.setAttribute("onmouseover", exp);

}

JAM.stopProfile('load');
