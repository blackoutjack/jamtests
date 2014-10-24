introspect(JAM.policy.pFull) {
var exp = 'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=onmouseup2", true);xmlhttp.send(null);';
document.getElementById("test").addEventListener("mouseup", Function(exp), false)

}
