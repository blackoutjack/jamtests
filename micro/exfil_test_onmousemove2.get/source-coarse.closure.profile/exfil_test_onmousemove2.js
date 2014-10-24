
JAM.startProfile('load');
introspect(JAM.policy.pFull) {
var exp = 'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=onmousemove2", true);xmlhttp.send(null);';
document.getElementById("test").addEventListener("mousemove", Function(exp), false)

}

JAM.stopProfile('load');
