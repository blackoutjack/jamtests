
JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll) {
var exp = 'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=onkeydown2", true);xmlhttp.send(null);';
document.getElementById("test").addEventListener("keydown", Function(exp), false);

}

JAM.stopProfile('load');
