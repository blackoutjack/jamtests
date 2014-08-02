
JAM.startProfile('load');
introspect(JAM.policy.pFull) {
var exp = 'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=onload1", true);xmlhttp.send(null);';
var v0 = document.body;
v0.setAttribute("onload", exp);

}

JAM.stopProfile('load');
