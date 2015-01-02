var exp = 'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=onload1", true);xmlhttp.send(null);';
var v0 = document.body;
introspect(JAM.policy.p1) {
  v0.setAttribute("onload", exp);
}
