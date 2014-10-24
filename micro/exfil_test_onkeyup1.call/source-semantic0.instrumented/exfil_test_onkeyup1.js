var exp = 'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=onkeyup1", true);xmlhttp.send(null);';
var v0 = document.getElementById("test");
introspect(JAM.policy.p1) {
  v0.setAttribute("onkeyup", exp);
}
